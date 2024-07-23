import * as anchor from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddressSync } from '@solana/spl-token';
import { IDL, Endcoin } from './idl';
import { WalletContextState } from '@solana/wallet-adapter-react';

//function to swap tokens
export const swapTokens = async (
  inputToken: string,
  amount: number,
  wallet: WalletContextState,
) => {
  //get user's public key from wallet
  const userKey = wallet.publicKey;
  if (!userKey) return;

  if (!wallet.signTransaction) {
    console.error('Wallet does not support signing transactions');
    return;
  }

  //get env variables
  const url = process.env.REACT_APP_SOLANA_RPC as string;
  const endcoin = process.env.REACT_APP_ENDCOIN_MINT_ADDRESS as string;
  const gaiacoin = process.env.REACT_APP_GAIACOIN_MINT_ADDRESS as string;
  const program_id = process.env.REACT_APP_PROGRAM_ID as string;
  const decimals = process.env.REACT_APP_TOKEN_DECIMALS;

  //end and gaia mints
  const mintA = new PublicKey(endcoin);
  const mintB = new PublicKey(gaiacoin);

  //program id
  const programId = new PublicKey(program_id);

  //get connection
  const connection = new Connection(url, 'confirmed');

  //get program
  const program = new anchor.Program<Endcoin>(IDL, programId, {
    connection,
  });

  //derive amm
  const amm = PublicKey.findProgramAddressSync(
    [Buffer.from('amm')],
    programId,
  )[0];

  //derive pool address
  const poolKey = PublicKey.findProgramAddressSync(
    [amm.toBuffer(), mintA.toBuffer(), mintB.toBuffer()],
    program.programId,
  )[0];

  //derive pool authority
  const poolAuthority = PublicKey.findProgramAddressSync(
    [mintA.toBuffer(), mintB.toBuffer(), Buffer.from('authority')],
    program.programId,
  )[0];

  //derive pool associated token account for Endcoin
  const poolAccountA = getAssociatedTokenAddressSync(
    mintA,
    poolAuthority,
    true,
  );

  //derive pool associated token account for GaiaCoin
  const poolAccountB = getAssociatedTokenAddressSync(
    mintB,
    poolAuthority,
    true,
  );

  //derive user's associated token account for Endcoin and GaiaCoin
  const traderAccountA = getAssociatedTokenAddressSync(mintA, userKey);
  const traderAccountB = getAssociatedTokenAddressSync(mintB, userKey);

  //convert amount to BN
  const inputAmount = new anchor.BN(
    amount * 10 ** parseFloat(decimals as string),
  );

  //call swapExactTokensForTokens method
  try {
    const tx = await program.methods
      .swapExactTokensForTokens(
        inputToken === 'endcoin' ? true : false,
        inputAmount,
      )
      .accounts({
        amm: amm,
        pool: poolKey,
        poolAuthority: poolAuthority,
        trader: userKey,
        mintA: mintA,
        mintB: mintB,
        poolAccountA: poolAccountA,
        poolAccountB: poolAccountB,
        traderAccountA: traderAccountA,
        traderAccountB: traderAccountB,
        payer: userKey,
      })
      .transaction();

    const blockhash = (await connection.getLatestBlockhash()).blockhash;
    tx.recentBlockhash = blockhash;
    tx.feePayer = userKey;

    const signedTx = await wallet.signTransaction(tx);
    const txId = await connection.sendRawTransaction(signedTx.serialize(), {
      skipPreflight: false,
      preflightCommitment: 'finalized',
    });

    return { txId };
  } catch (err: any) {
    console.log(err);
    const errorMessage = extractErrorMessage(err);
    return { error: errorMessage };
  }
};

//function to extract message from logs
const extractErrorMessage = (err: any): string | any => {
  const logs: string = err.logs ? err.logs.join('\n') : 'No logs available';
  const errorLine = logs
    .split('\n')
    .find((line) => line.includes('Error Message'));
  if (errorLine) {
    const errorMessage = errorLine.split('Error Message: ')[1];
    return errorMessage || err;
  }
  return err;
};
