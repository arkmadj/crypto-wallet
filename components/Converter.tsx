import ConverterCoinCard from "./ConverterCoinCard";
import { RefreshIcon } from "@heroicons/react/outline";
import ConverterScreen from "./ConverterScreen";
import Button from "./Button";

export interface ConverterProps {}

const Converter: React.FC<ConverterProps> = () => {
  return (
    <div className="bg-converterBackground px-5 py-10 xl:px-10 xl:py-16 rounded-2xl space-y-10">
      <div className="flex space-x-10">
        <ConverterCoinCard
          name="Bitcoin"
          subtext="15.04 BTC ($58 659.98)"
          icon="B"
        />
        <ConverterCoinCard
          name="Ethereum"
          subtext="152 ETH ($30 459.98)"
          icon="E"
        />
      </div>
      <div className="flex items-center justify-center">
        <RefreshIcon className="h-10 w-10" />
      </div>
      <div className="flex space-x-5 xl:space-x-10">
          <ConverterScreen amount="5.000000" price="21 759.92"/>
          <ConverterScreen amount="89.65893" price="20 759.92"/>
      </div>
      <div className="space-y-10">
          <div className="flex justify-between space-x-10">
              <div className="w-1/2">
                  <p>You spend</p>
                  <p className="text-white text-base xl:text-xl font-bold">1 BTC = 32.59 ETH</p>
              </div>
              <div className="w-1/2">
                  <p>You spend</p>
                  <p className="text-white text-base xl:text-xl font-bold">1 BTC = 32.59 ETH</p>
              </div>
          </div>
          <div className="flex justify-center">
              <Button text="Convert Now"/>
          </div>
      </div>
    </div>
  );
};

export default Converter;
