export interface LinkCardProps {
  description: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ description, link }) => {
  return (
    <div className="h-[200px] bg-converterBackground rounded-2xl border border-gray-600 p-5 justify-between space-y-5 shadow-2xl">
      <div className="text-white space-y-2">
        <p className="font-bold">Invitation link</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex pl-3 h-10 bg-mainBackground w-full rounded-3xl items-center justify-between text-white">
        <p>{link}</p>
        <div className="w-3/12 rounded-3xl bg-gray-300 flex justify-center text-black px-5 py-2 font-bold cursor-pointer hover:bg-gray-400">
          <p>Copy</p>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
