import Link from "next/link";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  DesktopComputerIcon,
  RefreshIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const zero = "blue";

  const [activeToolbar, setActiveToolBar] = useState("");
  const [activeToolbarStyle, setActiveToolBarStyle] = useState({});

  const handleMouseEnter = (sideBarMenu: string) => {
    setActiveToolBar(activeToolbar !== sideBarMenu ? sideBarMenu : "");
    // setActiveToolBarStyle({opacity: 1, top: "50%")
  };

  const handleMouseLeave = () => {
    setActiveToolBar("");
  };

  return (
    <div className="w-[10%] xl:w-[13%] h-full flex flex-col mt-16 fixed z-10">
      {/* Top */}
      <div className="space-y-6">
        <Link href="/">
          <div
            className="flex bg-pink-200 bg-opacity-30 h-10 rounded-sm cursor-pointer"
            onMouseEnter={() => handleMouseEnter("dashboard")}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className="h-full xl:w-2 bg-pink-600 xl:rounded-full justify-start"></div>
            <div className="flex flex-grow items-center ml-10">
              <DesktopComputerIcon className="w-8 h-8 text-pink-600" />
              <p className="ml-3 opacity-0 xl:opacity-100">Dashboard</p>
            </div>
            {activeToolbar == "dashboard" && (
              <span
                style={{ transition: "all 0.5s ease" }}
                className="tooltip bg-pink-200"
              >
                Dashboard
              </span>
            )}
          </div>
        </Link>
        <Link href="">
          <div
            className="flex hover:bg-orange-200 hover:bg-opacity-30 h-10 rounded-sm cursor-pointer transition duration-500 ease-in-out"
            onMouseEnter={() => handleMouseEnter("wallet")}
            onMouseLeave={() => handleMouseLeave()}
          >
            {activeToolbar == "wallet" && (
              <div className="h-full w-2 bg-orange-600 rounded-full justify-start"></div>
            )}
            <div className="flex flex-grow items-center ml-10">
              <CreditCardIcon className="w-8 h-8 text-orange-700" />
              <p className="ml-3 opacity-0 xl:opacity-100">My Wallet</p>
            </div>
            {activeToolbar == "wallet" && (
              <span
                style={{ transition: "all 0.5s ease" }}
                className="tooltip bg-orange-200"
              >
                My Wallet
              </span>
            )}
          </div>
        </Link>
        <Link href="/transaction">
          <div
            className="flex hover:bg-yellow-200 hover:bg-opacity-30 h-10 rounded-sm cursor-pointer transition duration-500 ease-in-out"
            onMouseEnter={() => handleMouseEnter("transaction")}
            onMouseLeave={() => handleMouseLeave()}
          >
            {activeToolbar == "transaction" && (
              <div className="h-full w-2 bg-yellow-600 rounded-full justify-start"></div>
            )}
            <div className="flex flex-grow items-center ml-10">
              <CurrencyDollarIcon className="w-8 h-8 text-yellow-600" />
              <p className="ml-3 opacity-0 xl:opacity-100">Transaction</p>
            </div>
            {activeToolbar == "transaction" && (
              <span
                style={{ transition: "all 0.5s ease" }}
                className="tooltip bg-yellow-200"
              >
                Transaction
              </span>
            )}
          </div>
        </Link>
        <Link href="/exchange">
          <div
            className="flex hover:bg-teal-200 hover:bg-opacity-30 h-10 rounded-sm cursor-pointer transition duration-500 ease-in-out"
            onMouseEnter={() => handleMouseEnter("exchange")}
            onMouseLeave={() => handleMouseLeave()}
          >
            {activeToolbar == "exchange" && (
              <div className="h-full w-2 bg-teal-600 rounded-full justify-start"></div>
            )}
            <div className="flex flex-grow items-center ml-10">
              <RefreshIcon className="w-8 h-8 text-teal-300" />
              <p className="ml-3 opacity-0 xl:opacity-100">Exchange</p>
            </div>
            {activeToolbar == "exchange" && (
              <span
                style={{ transition: "all 0.5s ease" }}
                className="tooltip bg-teal-200"
              >
                Exchange
              </span>
            )}
          </div>
        </Link>
      </div>
      {/* Middle */}
      <div className="flex flex-grow"></div>
      {/* Bottom */}
      <div className="sticky bottom-0">
        <div className="">
          <p className="text-white ml-10 mb-16 font-bold text-xl opacity-0 xl:opacity-100">
            Partner Service
          </p>
        </div>
        <div className="space-y-6 mb-10">
          <div className="flex h-10">
            <div className="flex flex-grow items-center ml-10">
              <PresentationChartLineIcon className="w-8 h-8 text-gray-500" />
              <p className="ml-3 opacity-0 xl:opacity-100">OTS</p>
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex flex-grow items-center ml-10">
              <PresentationChartBarIcon className="w-8 h-8 text-gray-500" />
              <p className="ml-3 opacity-0 xl:opacity-100">MTS</p>
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex flex-grow items-center ml-10">
              <CogIcon className="w-8 h-8 text-gray-500" />
              <p className="ml-3 opacity-0 xl:opacity-100">Tradebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
