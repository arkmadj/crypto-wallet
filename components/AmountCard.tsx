import { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export interface AmountCardProps {
  balance: string;
}

const AmountCard: React.FC<AmountCardProps> = ({ balance }) => {
  const [currency, setCurrency] = useState("BTC");
  const changeCurrency = () => {
    setCurrency(currency !== "BTC" ? "BTC" : "ETH");
  };
  return (
    <div className="flex items-center float-right justify-between bg-mainBackground px-5 rounded-full space-x-5 xl:w-[90%] w-full md:bg-purple-800 lg:bg-blue-600 xl:bg-red-600 2xl:bg-green-700">
      <div className="flex w-3/4 2xl:w-1/2 justify-between">
        <span>Amount:</span>
        <span className="text-white font-bold">{`${balance} ${currency}`}</span>
      </div>
      <div className="flex w-1/4 2xl:w-1/2 items-center justify-between">
        <span
          className="text-pink-600 cursor-pointer"
          onClick={() => changeCurrency()}
        >
          Change
        </span>
        <DotsHorizontalIcon className="h-10 w-10" />
      </div>
    </div>
  );
};

export default AmountCard;
