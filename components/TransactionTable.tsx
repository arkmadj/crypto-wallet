import {
  ChevronDownIcon,
  DuplicateIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

export enum TransactionType {
  Selling,
  Buying,
}

interface TableData {
  dealNumber: string;
  user: string;
  type: string;
  exchangeRate: string;
}

export interface TransactionTableProps {
  linkHeaders: string[];
  filterHeaders: string[];
  tableData: TableData[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  linkHeaders,
  filterHeaders,
  tableData,
}) => {
  return (
    <div>
      <div className="flex justify-between border-b-[1px] border-gray-500">
        {linkHeaders.map((header, index) => (
          <span
            className="px-10 py-2 rounded-t-md border-b-4 border-opacity-0 hover:border-opacity-100 border-pink-600 -mb-1 hover:bg-pink-600 hover:bg-opacity-20 hover:text-white font-bold"
            key={index}
          >
            {header}
          </span>
        ))}
      </div>
      {/* <div className="flex justify-between mt-10 border-b-[1px] border-gray-500">
        {filterHeaders.map((filter, index) => (
          <div className="flex items-center py-2" key={index}>
            <span>{filter}</span>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-12 mt-10 space-x-5 border-b-[1px] border-gray-500">
        <div className="flex items-center py-2 col-span-4 space-x-2">
          <span>{filterHeaders[0]}</span>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center py-2 col-span-2 space-x-2">
          <span>{filterHeaders[1]}</span>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center py-2 col-span-2 space-x-2 justify-center">
          <span>{filterHeaders[2]}</span>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center py-2 col-span-3 space-x-2">
          <span>{filterHeaders[3]}</span>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="overflow-y-auto h-[450px]">
        {tableData.map((data, index) => (
          <div
            className="grid grid-cols-12 font-bold py-5 px-1 rounded-l-2xl space-x-5 hover:bg-converterBackground"
            key={index}
          >
            <div className="col-span-4 flex space-x-8 items-center">
              <div className="flex flex-col">
                <div className="flex justify-between space-x-2 items-center">
                  <span className="rounded-full w-2 h-2 bg-orange-300"></span>
                  <span className="text-white">
                    Deal number {data.dealNumber}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="rounded-full w-2 h-2"></span>
                  <span className="font-thin text-sm">User Online</span>
                </div>
              </div>
              <DuplicateIcon className="h-5 w-5" />
            </div>
            <span className="col-span-2">{data.user}</span>
            <span className="col-span-2 bg-teal-900 rounded-xl text-white flex justify-center items-center">
              {data.type}
            </span>
            <div className="col-span-3 flex flex-col">
              <span>{data.exchangeRate} USD/BTC</span>
              <span className="font-thin text-sm">30.06.2021 19:58</span>
            </div>
            <ArrowCircleRightIcon className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
