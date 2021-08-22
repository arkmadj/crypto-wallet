import {
  BellIcon,
  SearchIcon,
  AnnotationIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import { setActivePage } from "../redux/actions/activePageActions";
export interface HeaderProps {
  activePage: string;
  setActivePage: any;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const currPage = activePage.activePage;

  const handleClick = (headerMenu: string) => {
    setActivePage(headerMenu);
  };

  return (
    <div className="sticky top-0 bg-mainBackground flex items-center px-20">
      {/* Left */}
      <div className="flex items-center">
        <div>
          <p className="text-white text-3xl font-bold">My Wallet</p>
        </div>
        <div>
          <div className="rounded-full bg-searchBackground flex p-2 items-center ml-20 text-gray-400 text-sm">
            <SearchIcon className="h-5" />
            <input
              className="bg-transparent outline-none ml-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      {/* Middle */}
      <div className="flex flex-grow"></div>
      {/* Right */}
      <div className="flex space-x-8 justify-end">
        {/* Icon List  */}
        <div className="flex space-x-8 items-center">
          <BellIcon className="header-icon" />
          <AnnotationIcon className="header-icon" />
          <CalendarIcon className="header-icon" />
        </div>
        <div className="flex items-center space-x-3">
          <div className="mr-3">
            <span className="whitespace-nowrap text-white text-xs">
              Jun 30,2021
            </span>
          </div>
          <Link href="/account">
            <div
              className="h-[115px] flex flex-col"
              onClick={() => handleClick("account")}
            >
              <div className=" flex flex-grow items-center justify-center">
                <div
                  className={`transition duration-500 ease-in-out bg-red-50 rounded-full flex items-center hover:border-orange-700 border-4 cursor-pointer ${
                    currPage === "account"
                      ? "border-orange-700"
                      : "border-mainBackground"
                  }`}
                >
                  <Image
                    className="rounded-full cursor-pointer border-8 border-red-100"
                    src="/images/profile.png"
                    width="50"
                    height="50"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div
                className={`flex-shrink h-3 bg-orange-700 rounded-lg transform -translate-x-1/2 transition duration-500 ease-in-out ${
                  currPage === "account" ? "opacity-100 translate-x-0" : "opacity-0"
                }`}
              ></div>
            </div>
          </Link>
          <ChevronDownIcon className="h-5 w-5 text-xs text-white" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
