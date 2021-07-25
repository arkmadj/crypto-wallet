import Head from "next/head";
import Converter from "../components/Converter";
import ExchangeCoinList from "../components/ExchangeCoinList";
import Step from "../components/Step";

export interface ExchangeProps {}

const Exchange: React.FC<ExchangeProps> = () => {
  const coinListData = [
    {
      name: "Bitcoin",
      subtext: "BTC",
      icon: "B",
      amount: 5.0415,
      price: 58759.92,
    },
    {
      name: "Ethereum",
      subtext: "ETC",
      icon: "E",
      amount: 142.05,
      price: 58759.93,
    },
    {
      name: "Litecoin",
      subtext: "LTC",
      icon: "L",
      amount: 125.69,
      price: 58759.93,
    },
    {
      name: "Dogecoin",
      subtext: "DGC",
      icon: "D",
      amount: 169598.5,
      price: 58759.93,
    },
  ];

  const stepData = [
    {
      name: "Select",
      subtext: "1st",
    },
    {
      name: "Confirm",
      subtext: "2nd",
    },
    {
      name: "Success",
      subtext: "3rd",
    },
  ];

  return (
    <>
      <Head>
        <title>Exchange</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow px-10 bg-contentBackground rounded-2xl mr-10 h-5/6">
        <div className="w-full h-full flex space-x-20 py-10">
          <div className="w-2/5 space-y-10">
            {/* <p>Left</p> */}
            <p className="text-white text-2xl font-bold">Wallets</p>
            <ExchangeCoinList coinsData={coinListData} />
          </div>
          <div className="w-1/2 space-y-10">
            <Step steps={stepData} />
            <Converter/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;