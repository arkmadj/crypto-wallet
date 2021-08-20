export interface InstructionListCardProps {
  instructions: string[];
  description: string;
}

const InstructionListCard: React.FC<InstructionListCardProps> = ({
  instructions,
  description,
}) => {
  return (
    <div className="h-[200px] bg-converterBackground rounded-2xl border border-gray-600 p-5 justify-between space-y-5 shadow-2xl">
      <div className="text-white space-y-2">
        <p className="font-bold">Upgrade to Company Account</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="space-y-3 text-white">
        {instructions.map((instruction, index) => (
          <div className="flex items-center space-x-5" key={index}>
            <span className="flex justify-center items-center bg-mainBackground rounded-2xl w-10 h-8 ">
              {index + 1}
            </span>
            <span className="underline cursor-pointer">{instruction}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructionListCard;
