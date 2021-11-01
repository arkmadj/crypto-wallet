export interface TransactionCardProps {
  title: string;
}

const TransactionCard: React.FC<TransactionCardProps> = (props) => {
  return (
    <div className="flex items-center bg-converterBackground w-1/2 rounded-2xl border border-gray-600 text-2xl space-x-5 font-bold text-white p-4">
      {props.children}
      <span>{props.title}</span>
    </div>
  );
};

export default TransactionCard;
