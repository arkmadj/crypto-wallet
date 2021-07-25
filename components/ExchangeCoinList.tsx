import { ChevronDownIcon } from "@heroicons/react/solid";

interface Coin {
  name: string;
  subtext: string;
  icon: string;
  amount: number;
  price: number;
}

export interface ExchangeCoinListProps {
  coinsData: Coin[];
}

const ExchangeCoinList: React.FC<ExchangeCoinListProps> = ({ coinsData }) => {
  return (
    <div className="space-y-20"> 
      <div className="flex justify-between">
        <div>
          <div className="flex space-x-2 items-center">
            <p className="text-white text-xl font-bold">USD</p>
            <ChevronDownIcon className="text-white h-5 w-5 text-xs" />
          </div>
          <p className="text-white">Market Value</p>
        </div>
        <div>
          <p className="text-white text-xl font-bold text-right">
            $ 159 001 425
          </p>
          <p className="text-white text-right">Total Balance</p>
        </div>
      </div>
      <div className="space-y-20">
        {coinsData.map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <div className="bg-pink-600 flex items-center justify-center text-white font-bold text-5xl rounded-2xl w-16 h-16">
                <p>{coin.icon}</p>
              </div>
              <div>
                <p className="font-light">{coin.name}</p>
                <p className="font-bold">{coin.subtext}</p>
              </div>
            </div>
            <div>
              <p className="text-right text-white text-3xl font-bold">{coin.amount}</p>
              <p className="text-right">${coin.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExchangeCoinList;
