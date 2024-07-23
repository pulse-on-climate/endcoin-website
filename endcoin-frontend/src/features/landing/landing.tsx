import Coin from './Coin';
import About from './About';
import Contact from './Contact';
import Hackathon from './Hackathon';
import WhitePaper from './WhitePaper';
import DataGraph from './DataGraph';
import SwapUI from './swap';
import * as walletAdapterReact from '@solana/wallet-adapter-react';
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

export default function Landing() {
  const endpoint = clusterApiUrl('devnet');

  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];
  return (
    <>
      <div className="flex flex-col bg-[#09090E]">
        <Coin />
        <About />
        <Hackathon />
        <WhitePaper />
        <DataGraph />
        <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
          <walletAdapterReact.WalletProvider wallets={wallets}>
            <WalletModalProvider>
              <SwapUI />
            </WalletModalProvider>
          </walletAdapterReact.WalletProvider>
        </walletAdapterReact.ConnectionProvider>

        <Contact />
      </div>
    </>
  );
}
