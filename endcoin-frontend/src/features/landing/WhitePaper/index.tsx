import 'github-markdown-css';
import './whitepaper.css';
import Layout from '../../../app/Layout/layout';
import { transition } from '../../../constants/transition';

type Props = {};

const WhitePaper = (props: Props) => {
  return (
    <Layout brownBackground={true}>
      <div
        id="whitepaper"
        className="flex flex-col justify-center items-center py-[75px]"
      >
        <div className="text-white flex flex-col gap-y-6 items-center max-w-[830px]">
          <p className="text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px] font-endcoin-bold">
            White Paper
          </p>
          <p className="text-[14px] endcoin-xl:text-[18px] text-center">
            Explore how a decentralized network of ground stations and a novel
            token, appreciating in value with the intensifying effects of
            climate change, can revolutionize funding for green technologies.
            Delve into the nitty gritty by reading our whitepaper!
          </p>
          <button
            onClick={() =>
              window.open(
                'https://pulse-on-climate.github.io/endcoin-whitepaper/',
                '_blank',
              )
            }
            className={`rounded border border-end-button-blue text-end-button-blue text-end-button-green text-[12px] endcoin-md:text-[16px] py-2 px-[14.5px] bg-none hover:bg-end-button-blue hover:text-black ${transition}`}
          >
            Read the White paper
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WhitePaper;
