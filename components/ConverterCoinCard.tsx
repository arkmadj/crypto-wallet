import { ChevronDownIcon } from "@heroicons/react/solid";

export interface ConverterCoinCardProps {
  name: string;
  subtext: string;
  icon: string;
}

const ConverterCoinCard: React.FC<ConverterCoinCardProps> = ({
  name,
  subtext,
  icon,
}) => {
  return (
    <div className="flex justify-between items-center bg-mainBackground w-1/2 rounded-2xl p-5">
      <div>
        <p>{name}</p>
        <p>{subtext}</p>
      </div>
      <div className="bg-pink-600 flex items-center justify-center text-white font-bold text-3xl rounded-full w-12 h-12">
        <p>{icon}</p>
      </div>
      <ChevronDownIcon className="text-white h-5 w-5 text-xs" />
    </div>
  );
};

export default ConverterCoinCard;
