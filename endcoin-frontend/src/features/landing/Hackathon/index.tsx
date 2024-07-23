import './hack.css';
import Layout from '../../../app/Layout/layout';
import HackTile from './components/HackTile';
import FieldsTile from './components/FieldsTile';
import { transition } from '../../../constants/transition';
type Props = {};

const Hackathon = (props: Props) => {
  const taskItems = [
    {
      id: '00',
      title: 'Tasks accomplished',
    },
    {
      id: '01',
      title: 'POC',
      subtitle:
        'Build a decentralized antenna that can read raw data from satellites.',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '02',
      title: 'Aggregate',
      subtitle:
        'How can a large piece of data be pulled in fragments from many small antennas and be reconstructed?',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '03',
      title: 'Audit',
      subtitle:
        'Is our devnet deployed AMM really ready to face the music on mainnet?',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '04',
      title: 'Business',
      subtitle:
        "We've done dev and have a vision. Now we need pitch decks, narrative, and suits and ties.",
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '05',
      title: 'Hype',
      subtitle:
        'We need to find a community member to lay the foundation to hype our memes -- social media, discord, website, etc.',
      progress:
        'decentralized antenna” that can read raw data from satellites.',
    },
  ];

  const fieldItems = [
    'DePin Hardware and firmware',
    'Proof Algorithms',
    'Climate Data Specialist',
    'Climate Data Algorithms',
    'Solana Programs',
    'AMM',
    'Hype',
    'Tokenomics',
    'Satellite Communications Expert',
  ];

  return (
    <Layout>
      <div
        id="hackathon"
        className="flex w-full h-full font-endcoin flex-col items-center py-16 endcoin-md:mt-0 gap-y-16 endcoin-md:gap-y-[270px]"
      >
        <div className="text-white w-full flex flex-col items-center gap-y-6">
          <p className="text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px] text-center">
            COLOSSEUM HACKATHON
          </p>
          <p className="text-[14px] endcoin-lg:text-[18px] text-center w-full endcoin-md:max-w-[50vw]">
            We have submit to the Colosseum Renaissance hackathon to compete for
            top prize in DePin, DeFi and Climate. We (Andrew & Lucas) can do all
            the parts, but we’re building a team to move faster and raise funds
            for manufacturing.
          </p>
          <button
            onClick={() =>
              window.open('https://www.colosseum.org/renaissance', '_blank')
            }
            className={`rounded border border-end-button-blue text-end-button-blue text-end-button-green text-[14px] kimo-md:text-[16px] py-2 px-[14.5px] bg-none hover:bg-end-button-blue hover:text-black ${transition}`}
          >
            Visit Colosseum Hackathon
          </button>
        </div>
        <div className="flex flex-col w-full text-center gap-y-10 endcoin-md:gap-y-20">
          <p className="text-white text-[24px] py-2 md:hidden">
            Tasks to be accomplished
          </p>
          <div className="grid grid-cols-1 endcoin-lg:grid-cols-3 w-full endcoin-md:flex-row flex-wrap gap-x-12 gap-y-12">
            {taskItems.map((item, id) => (
              <HackTile key={id} item={item} noFlip={true}/>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-10 endcoin-md:gap-y-20 items-center w-full">
          <p className="text-white text-[24px] endcoin-md:text-[36px]">
            Main fields of Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full endcoin-md:flex-row flex-wrap gap-x-[30px] gap-y-[30px]">
            {fieldItems.map((item, id) => (
              <FieldsTile key={id} title={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hackathon;
