import Card from "./Card";

export interface CardListProps {}

const CardList: React.SFC<CardListProps> = () => {
  return (
    <div className="flex space-x-20 mt-8">
      <Card name="Bitcoin" subtext="BTC" price="$1500" percent="33" icon="B"/>
      <Card name="Ethereum" subtext="ETH" price="$860" percent="56" icon="E" />
      <Card name="Litecoin" subtext="LTC" price="$800" percent="12" icon="L" />
      <Card  name="Doge Coin" subtext="BNB" price="$400" percent="8" icon="D"/>
    </div>
  );
};

export default CardList;
