import { DotsVerticalIcon } from "@heroicons/react/outline";

interface Data {
  price: string;
  amount: string;
  total: string;
}

export interface TableProps {
  data: Data[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="ring-1 ring-gray-600 p-5 text-white rounded-2xl bg-black shadow-2xl">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Sell Order</p>
        <DotsVerticalIcon className="h-5 w-5" />
      </div>
      <div className="grid grid-cols-5 mt-5">
        <p className="col-span-2 font-bold">Price</p>
        <p className="col-span-2 font-bold">Amount</p>
        <p className="font-bold">Total</p>
      </div>
      {data.map((data, index) => (
        <div className="grid grid-cols-5 mt-5 text-gray-300" key={index}>
          <p className="col-span-2">{data.price}</p>
          <p className="col-span-2">{data.amount}</p>
          <p>{data.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
