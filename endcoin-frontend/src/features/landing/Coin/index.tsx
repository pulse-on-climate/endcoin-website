import coin from '../../../images/coin.svg';
import { scrollToDiv } from '../../../constants/scrollFunction';
import Layout from '../../../app/Layout/layout';
import { transition } from '../../../constants/transition';

type Props = {};

const Coin = (props: Props) => {
  return (
    <Layout>
      <div
        id="coin"
        className="flex w-full font-endcoin flex-col gap-y-10 endcoin-md:flex-row-reverse justify-center items-center endcoin-md:justify-between min-h-screen"
      >
        <div className="w-full flex justify-center max-h-[450px] max-w-[450px]">
          <img src={coin} alt="Coin" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between gap-y-8 w-full">
          <p className="text-white text-[40px] font-endcoin-bold endcoin-lg:text-[48px] endcoin-xl:text-[64px] leading-none">
            Endcoin
          </p>
          <p className="text-blue-400 text-[40px] font-endcoin-bold endcoin-lg:text-[48px] endcoin-xl:text-[64px] leading-none">
            Decentralized Ground Stations are the next frontier of DePin.
          </p>

          {/* Add a catchphrase here or remove this line */}
          <p className="text-white text-[14px] endcoin-md:text-[18px]">
            - Joey Hiller - Senior Technical Director at Helium Foundation
          </p>
          <button
            onClick={() => scrollToDiv('mission')}
            className={`bg-end-button-blue rounded p-3 endcoin-md:p-4 text-xs endcoin-lg:text-[16px] max-w-fit text-[#03294D] mt-3 font-bold hover:text-black hover:bg-end-button-hover-blue ${transition}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;
