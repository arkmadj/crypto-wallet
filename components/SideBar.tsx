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
import { connect } from "react-redux";
import { setActivePage } from "../redux/actions/activePageActions";

export interface SideBarProps {
  activePage: any;
  setActivePage: any;
}

const SideBar: React.FC<SideBarProps> = ({ activePage, setActivePage }) => {

  const currPage = activePage.activePage;
  const [hoverMenu, setHoverMenu] = useState("");

  const handleMouseEnter = (sideBarMenu: string) => {
    setHoverMenu(hoverMenu !== sideBarMenu ? sideBarMenu : "");
  };

  const handleMouseLeave = () => {
    setHoverMenu("");
  };

  const handleClick = (sideBarMenu: string) => {
    setActivePage(sideBarMenu);
  };

  return (
    <div className="w-[10%] xl:w-[13%] h-full flex flex-col mt-16 fixed z-10">
      {/* Top */}
      <div className="space-y-6">
        <Link href="/">
          <div
            className={`bg-pink-200 ${
              currPage === "dashboard" ? "bg-opacity-30" : "bg-opacity-0"
            } side-bar-menu`}
            onMouseEnter={() => handleMouseEnter("dashboard")}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick("dashboard")}
          >
            <div
              className={`bg-pink-600 side-bar-menu-pill ${
                currPage === "dashboard" ? "opacity-100 translate-y-0" : "opacity-0"
              }`}
            ></div>
            <div className="flex flex-grow items-center ml-10">
              <DesktopComputerIcon className="w-8 h-8 text-pink-600" />
              <p className="ml-3 opacity-0 xl:opacity-100">Dashboard</p>
            </div>
            <span
              className={`tooltip bg-pink-200 ${
                hoverMenu === "dashboard"
                  ? "opacity-100 translate-y-0 xl:opacity-0"
                  : "opacity-0"
              }`}
            >
              Dashboard
            </span>
          </div>
        </Link>
        <Link href="">
          <div
            className={`bg-orange-200 ${
              currPage === "wallet" ? "bg-opacity-30" : "bg-opacity-0"
            } side-bar-menu`}
            onMouseEnter={() => handleMouseEnter("wallet")}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick("wallet")}
          >
            <div
              className={`bg-orange-600 side-bar-menu-pill ${
                currPage === "wallet" ? "opacity-100 transform translate-y-0" : "opacity-0"
              }`}
            ></div>
            <div className="flex flex-grow items-center ml-10">
              <CreditCardIcon className="w-8 h-8 text-orange-700" />
              <p className="ml-3 opacity-0 xl:opacity-100">My Wallet</p>
            </div>
            <span
              className={`tooltip bg-orange-200 ${
                hoverMenu === "wallet"
                  ? "opacity-100 translate-y-0 xl:opacity-0"
                  : "opacity-0"
              }`}
            >
              My Wallet
            </span>
          </div>
        </Link>
        <Link href="/transaction">
          <div
            className={`bg-yellow-200 hover:bg-opacity-30 side-bar-menu ${
              currPage === "transaction" ? "bg-opacity-30" : "bg-opacity-0"
            }`}
            onMouseEnter={() => handleMouseEnter("transaction")}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick("transaction")}
          >
            <div
              className={`bg-yellow-600 side-bar-menu-pill ${
                currPage === "transaction" ? "opacity-100 translate-y-0" : "opacity-0"
              }`}
            ></div>
            <div className="flex flex-grow items-center ml-10">
              <CurrencyDollarIcon className="w-8 h-8 text-yellow-600" />
              <p className="ml-3 opacity-0 xl:opacity-100">Transaction</p>
            </div>
            <span
              className={`tooltip bg-yellow-200 ${
                hoverMenu === "transaction"
                  ? "opacity-100 translate-y-0 xl:opacity-0"
                  : "opacity-0"
              }`}
            >
              Transaction
            </span>
          </div>
        </Link>
        <Link href="/exchange">
          <div
            className={`bg-teal-200 hover:bg-opacity-30 ${
              currPage === "exchange" ? "bg-opacity-30" : "bg-opacity-0"
            } side-bar-menu`}
            onMouseEnter={() => handleMouseEnter("exchange")}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick("exchange")}
          >
            <div
              className={`bg-teal-600 side-bar-menu-pill ${
                currPage === "exchange" ? "opacity-100 translate-y-0" : "opacity-0"
              }`}
            ></div>
            <div className="flex flex-grow items-center ml-10">
              <RefreshIcon className="w-8 h-8 text-teal-300" />
              <p className="ml-3 opacity-0 xl:opacity-100">Exchange</p>
            </div>
            <span
              className={`tooltip bg-teal-200 ${
                hoverMenu === "exchange"
                  ? "opacity-100 translate-y-0 xl:opacity-0"
                  : "opacity-0"
              }`}
            >
              Exchange
            </span>
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

const mapStateToProps = (state: any) => {
  return {
    activePage: state.activePage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setActivePage: (page: string) => {
      dispatch(setActivePage(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
