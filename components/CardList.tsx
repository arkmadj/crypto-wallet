import Card from "./Card";

export interface CardListProps {}

const CardList: React.SFC<CardListProps> = () => {
  const cardGraphData = [
    { value: 12 },
    { value: 22 },
    { value: 23 },
    { value: 25 },
    { value: 50 },
  ];

  return (
    <div className="flex mt-8 space-x-10 overflow-x-auto w-full">
      <Card
        name="Bitcoin"
        subtext="BTC"
        price="$1500"
        percent="33"
        icon="B"
        graphData={cardGraphData}
      />
      <Card
        name="Ethereum"
        subtext="ETH"
        price="$860"
        percent="56"
        icon="E"
        graphData={cardGraphData}
      />
      <Card
        name="Litecoin"
        subtext="LTC"
        price="$800"
        percent="12"
        icon="L"
        graphData={cardGraphData}
      />
      <Card
        name="Doge Coin"
        subtext="DGC"
        price="$400"
        percent="8"
        icon="D"
        graphData={cardGraphData}
      />
    </div>
  );
};

export default CardList;
