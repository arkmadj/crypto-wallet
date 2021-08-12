import Head from "next/head";
import AmountCard from "../components/AmountCard";
import TransactionCard from "../components/TransactionCard";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import TransactionTable from "../components/TransactionTable";

import { TransactionType } from "../components/TransactionTable";

export interface TransactionProps {}

const Transaction: React.FC<TransactionProps> = () => {
  const tableLinks = ["All deals", "Active", "Disputed", "Arbitage"];
  const tableFilters = ["Deal ID", "User", "Type", "Exchange rate"];
  const tableData = [
    {
      dealNumber: "221286",
      user: "michael1904",
      type: "Selling",
      exchangeRate: "2212"
    },
    {
      dealNumber: "886298",
      user: "jessica1234",
      type: "Selling",
      exchangeRate: "3423"
    },
    {
      dealNumber: "302842",
      user: "tommy1904",
      type: "Selling",
      exchangeRate: "5232"
    },
    {
      dealNumber: "232389",
      user: "bros_1",
      type: "Selling",
      exchangeRate: "6543"
    },
    {
      dealNumber: "324342",
      user: "greek_213",
      type: "Selling",
      exchangeRate: "8563"
    },
    {
      dealNumber: "873262",
      user: "sally_32",
      type: "Selling",
      exchangeRate: "1323"
    },
    {
      dealNumber: "232387",
      user: "simon_43",
      type: "Selling",
      exchangeRate: "1543"
    },
  ];
  return (
    <>
      <Head>
        <title>Transaction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow px-10 bg-contentBackground rounded-2xl mr-10 h-5/6 absolute left-[10%] xl:left-[13%] w-[80%]">
        <div className="w-full h-full flex space-x-10 py-10">
          <div className="w-[55%] space-y-10 rounded-md">
            <div>
              <span className="text-white text-2xl font-xs">Guarded </span>
              <span className="text-white text-2xl font-bold">Deals</span>
            </div>
            <div className="flex space-x-5">
              <TransactionCard title="Selling">
                <ArrowCircleRightIcon className="h-12 w-12 text-teal-400" />
              </TransactionCard>
              <TransactionCard title="Buying">
                <ArrowCircleLeftIcon className="h-12 w-12 text-teal-400" />
              </TransactionCard>
            </div>
            <div>
              <TransactionTable
                linkHeaders={tableLinks}
                filterHeaders={tableFilters}
                tableData={tableData}
              />
            </div>
          </div>
          <div className="w-[45%] space-y-10 bg-teal-200">
            <AmountCard balance={"1.234567891"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;