export interface ActionCardProps {
  description: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ description }) => {
  return (
    <div className="flex items-center bg-converterBackground rounded-2xl border border-gray-600 p-5 justify-between shadow-2xl">
      <div className="text-white space-y-2">
        <p className="font-bold">E-mail & Password</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="w-3/12 rounded-3xl bg-gray-300 flex items-center justify-center text-black px-5 py-2 font-bold cursor-pointer hover:bg-gray-400 h-10">
        <p>Change</p>
      </div>
    </div>
  );
};

export default ActionCard;
