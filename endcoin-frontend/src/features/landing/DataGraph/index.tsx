import Layout from '../../../app/Layout/layout';
import AreaChart from '../../graph/area-chart';

type Props = {};

const DataGraph = (props: Props) => {
  return (
    <Layout brownBackground={true}>
      <div
        id="dataGraph"
        className="flex flex-col w-full justify-center items-start py-[75px] gap-y-[50px] font-endcoin"
      >
        <p className="text-white text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px] text-left font-endcoin-bold">
          Where are we now?
        </p>
        <p className="text-white text-[20px] endcoin-md:text-[30px] endcoin-xl:text-[38px] text-left font-endcoin-bold">
          DeFi
        </p>
        <p className="text-[14px] endcoin-md:text-[18px] text-white">
          Andrew recently completed the 
          <a
            className="text-end-button-blue hover:underline"
            href="https://web3builders.dev/"
          >
            web 3 builders alliance (WBA)
          </a>{' '}
          Q4 Cohort, where we deployed an MVP POC to solana devnet. Using
          Switchboard, the solana program reads sea surface temperature from a
          data API. This data drives the emission rate of Endcoin and Gaiacoin.
          When temperatures rise more Gaiacoin than Endcoin are created. When
          temperatures fall, more Endcoin than Gaiacoin are created. When viewed
          as a pair in an AMM, this draws a “heartbeat” the “pulse on climate.”
          here is this data,from the AMM transactions on devnet, showing 30 days
          of emissions:
        </p>

        <div className="flex flex-col max-w-full">
          <AreaChart />
        </div>
        <p className="text-[14px] endcoin-md:text-[18px] text-white">
          We will take this MVP live on mainnet by the end of Q2 2024.
        </p>
        <p className="text-white text-[20px] endcoin-md:text-[30px] endcoin-xl:text-[38px] text-left font-endcoin-bold">
          DePin
        </p>
        <p className="text-[14px] endcoin-md:text-[18px] text-white">
          During the Renaissance hackathon, we built a POC for our DePin sensor.
          We are now in the process of establishing partnerships and on the
          campaign trail to raise funding to bring it to commercial production.
          We intend to have a saleable product by the end of Q3 2024. please
          visit our{' '}
          <a
            className="text-end-button-blue hover:underline"
            href="https://pulse-on-climate.github.io/endcoin-whitepaper/"
          >
            whitepaper
          </a>{' '}
          to venture down the rabbit hole.
        </p>
      </div>
    </Layout>
  );
};

export default DataGraph;
