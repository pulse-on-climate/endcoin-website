import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Layout from '../../../app/Layout/layout';
import { transition } from '../../../constants/transition';
import { swapTokens } from '../../../solana-setup/actions';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Spinner from '../../../components/Spinner/page';
import './swap.css';
import Popup from '../../../components/LoginPopup/page';
import { set } from '@project-serum/anchor/dist/cjs/utils/features';

const SwapUI: React.FC = () => {
  //states
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [transactionID, setTransactionID] = useState<string>('');
  const [inputToken, setInputToken] = useState<string>('endcoin');
  const [amount, setAmount] = useState<string>('');

  //hooks
  const wallet = useWallet();

  //consts
  const userKey = wallet.publicKey;

  //function for swap
  const handleSwap = async () => {
    if (!userKey) {
      setErrorMessage('Please connect your wallet');
      return;
    }

    if (!amount) {
      setErrorMessage('Please enter an amount');
      return;
    }
    setLoading(true);
    const amountNumber = parseFloat(parseFloat(amount).toFixed(3));

    try {
      const data = await swapTokens(inputToken, amountNumber, wallet);
      if (!data) return;
      if (data.error) {
        if (data.error.message && data.error.message.includes('Message:')) {
          const regex = /Message: ([\s\S]*?)Logs:/;
          const match = data.error.message.match(regex);
          setErrorMessage(match[1].trim());
        } else {
          console.log(data.error);
          setErrorMessage('Unable to complete swap. Please try again later.');
        }
      } else {
        console.log(`Transaction ID: ${data.txId}`);
        setTransactionID(data.txId as string);
      }
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
      setAmount('');
      setInputToken('endcoin');
    }
  };

  //effect to remove error message
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 4500);
  }, [errorMessage]);

  return (
    <Layout brownBackground={true}>
      {transactionID && (
        <Popup
          onClose={() => setTransactionID('')}
          rejectText="Close"
          title="Swap Complete"
          subTitle="You have successfully swapped assets."
          transaction={true}
          explorerLink={transactionID}
        />
      )}
      <div
        id="swap"
        className="w-full flex flex-col justify-center items-center py-[75px] gap-y-[50px] font-endcoin"
      >
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <p className="text-[30px] self-start text-white endcoin-md:text-[40px] endcoin-xl:text-[48px] font-endcoin-bold">
              Swap Tokens
            </p>
            <p className="font-endcoin-bold text-sm text-end-button-blue">
              Swap Endcoin for Gaiacoin or the other way round!
            </p>
          </div>
          <div className="w-fit h-fit border border-white rounded">
            <WalletMultiButton className="!bg-[#1C1C1C] hover:!bg-[#7BC6E3]" />
          </div>
        </div>
        <div className="w-full max-w-[500px]">
          <div className="mb-4 w-full">
            <label className="block text-sm font-endcoin text-white mb-2">
              Token to swap
            </label>
            <select
              value={inputToken}
              required
              onChange={(e) => setInputToken(e.target.value)}
              className="block w-full py-2 px-3 h-[54px] border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-end-button-blue focus:border-end-button-blue sm:text-sm text-white font-endcoin"
            >
              <option value="endcoin" className="option">
                Endcoin
              </option>
              <option value="gaiacoin" className="option">
                Gaiacoin
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-endcoin text-white mb-2">
              Amount of tokens to swap
            </label>
            <input
              type="text"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full py-2 px-3 h-[54px] border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-end-button-blue focus:border-end-button-blue sm:text-sm font-endcoin text-white"
            />
          </div>

          <button
            onClick={handleSwap}
            className={`rounded border border-end-button-blue text-end-button-blue text-end-button-green text-[14px] kimo-md:text-[16px] py-2 px-[14.5px] bg-none hover:bg-end-button-blue hover:text-black ${transition}`}
          >
            {loading ? <Spinner size={25} color="#fff" /> : 'Swap'}
          </button>
          {errorMessage?.length > 0 && (
            <p className="mt-3 text-sm font-endcoin text-red-400">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SwapUI;
