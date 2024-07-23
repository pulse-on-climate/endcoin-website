import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ProgramState } from './types/program-state';
import { EReducerState } from '../../app/enum';
import { GraphPoint } from './types/graph-point';
import {
  Connection,
  GetVersionedTransactionConfig,
  PublicKey,
} from '@solana/web3.js';
import { staticAMMHistory } from '../graph/static-amm-history';

const initialState: ProgramState = {
  status: EReducerState.IDLE,
  graphDataPoints: [],
};

export const selectGraphDataPoints = (state: RootState) =>
  state.program.graphDataPoints;
export const selectProgramStatus = (state: RootState) => state.program.status;

export const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    setGraphDataPoints: (state, action: PayloadAction<GraphPoint[]>) => {
      state.graphDataPoints = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramBalanceAsync.pending, (state) => {
        state.status = EReducerState.LOADING;
        console.log('perform fetch program balance async pending');
      })
      .addCase(
        fetchProgramBalanceAsync.fulfilled,
        (state, action: PayloadAction<GraphPoint[]>) => {
          state.graphDataPoints = action.payload;
          state.status = EReducerState.IDLE;
          console.log('perform fetch program balance async fulfilled');
        },
      )
      .addCase(fetchProgramBalanceAsync.rejected, (state, action) => {
        state.status = EReducerState.FAILED;
        console.log(
          `perform fetch program balance async rejected ${action.error.message}`,
        );
        console.log(action.error);
      })
      .addCase(fetchStaticDataPointsAsync.pending, (state) => {
        state.status = EReducerState.LOADING;
        console.log('perform fetch static data points async pending');
      })
      .addCase(
        fetchStaticDataPointsAsync.fulfilled,
        (state, action: PayloadAction<GraphPoint[]>) => {
          state.graphDataPoints = action.payload;
          state.status = EReducerState.IDLE;
          console.log('perform fetch static data points async fulfilled');
        },
      );
  },
});

//fetch mock data points
export const fetchStaticDataPointsAsync = createAsyncThunk(
  'program/fetch-static-data-points',
  async (_) => {
    let dataPoints: GraphPoint[] = staticAMMHistory.map((point) => ({
      blocktime: point.blocktime,
      EndGaia: point.endGaia,
      endCoin: point.endCoin,
      gaiaCoin: point.gaiaCoin,
    }));
    return dataPoints;
  },
  {
    condition: (_, { getState, extra }) => {
      const { program: state } = getState() as { program: ProgramState };
      if (state.status === EReducerState.LOADING) {
        console.log('perform mock data points async already loading');
        return false;
      }
    },
  },
);

//get fetch emission transactions from devnet
export const fetchProgramBalanceAsync = createAsyncThunk(
  'program/fetch-program-balance',
  async (_, { getState }) => {
    const programId = '3ueQV5DMwmnif9JBmf7SSvD6Lsf13nBu4dzCQfsjZX3d';
    const url = process.env.REACT_APP_SOLANA_RPC!;
    const connection = new Connection(url, 'confirmed');

    let dataPoints: GraphPoint[] = [];

    // Fetch the signatures of all transactions involving the program
    const signaturesInfo = await connection.getSignaturesForAddress(
      new PublicKey(programId),
    );

    //Iterate over each signature to fetch the transaction details
    const signatureArray = Array.from(signaturesInfo.entries());
    signatureArray.reverse();
    for (const [, signatureInfo] of signatureArray) {
      const signature = signatureInfo.signature;
      const transactionConfig: GetVersionedTransactionConfig = {
        commitment: 'finalized',
        maxSupportedTransactionVersion: 2,
      };

      const transaction = await connection.getTransaction(
        signature,
        transactionConfig,
      );

      if (transaction) {
        // Iterate over each account involved in the transaction
        if (!transaction.meta) {
          console.log('No transaction meta');
          continue;
        }

        let postBalance = 0;
        let endBalance = 0;
        let gaiaBalance = 0;
        let plsBalance = 0;
        if (transaction.meta.postTokenBalances) {
          const plsAddress = 'PLSxiYHus8rhc2NhXs2qvvhAcpsa4Q3TzTCi3o8xAEU';
          const gaiaAddress = 'GAiAxUPQrUaELAuri8tVC354bGuUGGykCN8tP4qfCeSp';
          const endAddress = 'ENDxPmLfBBTVby7DBYUo4gEkFABQgvLP2LydFCzGGBee';
          if (transaction.meta.postTokenBalances.length > 0) {
            const tokenBalances = transaction.meta.postTokenBalances;
            for (let i = 0; i < tokenBalances.length; i++) {
              const tokenBalance = tokenBalances[i];
              if (tokenBalance.mint === plsAddress) {
                console.log(
                  'PLS Balance: ' + tokenBalance.uiTokenAmount.amount,
                );
                plsBalance = tokenBalance.uiTokenAmount.uiAmount!;
              }
              if (tokenBalance.mint === gaiaAddress) {
                console.log(
                  'GAIA Balance: ' + tokenBalance.uiTokenAmount.uiAmount,
                );
                gaiaBalance = tokenBalance.uiTokenAmount.uiAmount!;
              }
              if (tokenBalance.mint === endAddress) {
                console.log(
                  'END Balance: ' + tokenBalance.uiTokenAmount.uiAmount,
                );
                endBalance = tokenBalance.uiTokenAmount.uiAmount!;
              }
              if (endBalance === 0 || gaiaBalance === 0) {
                continue;
              }
              postBalance = endBalance / gaiaBalance;
            }
          }
        }

        if (postBalance === 0) {
          continue;
        }
        const graphPoint: GraphPoint = {
          blocktime: transaction.blockTime!,
          EndGaia: postBalance,
          endCoin: endBalance,
          gaiaCoin: gaiaBalance,
        };
        dataPoints.push(graphPoint);
      }
    }
    //hack, since we batch emitted previous data points, multiple transactions are in the same block
    dataPoints.sort((a, b) => a.endCoin! - b.endCoin!);
    return dataPoints;
  },
  {
    condition: (_, { getState, extra }) => {
      const { program: state } = getState() as { program: ProgramState };
      if (state.status === EReducerState.LOADING) {
        console.log('perform fetch data points async already loading');
        return false;
      }
    },
  },
);

export const { setGraphDataPoints } = programSlice.actions;
export const programReducer = programSlice.reducer;
