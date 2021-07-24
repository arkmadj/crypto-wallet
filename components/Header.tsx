import {
  BellIcon,
  SearchIcon,
  AnnotationIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 bg-gray-900 flex items-center p-10">
      {/* Left */}
      <div className="flex items-center">
        <div>
          <p className="text-white text-3xl font-bold">My Wallet</p>
        </div>
        <div>
          <div className="rounded-full bg-gray-800 flex p-2 items-center ml-20 text-gray-400 text-sm">
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
        <div className="flex items-center space-x-2">
          <div>
            <p className="whitespace-nowrap text-gray-500 text-xs">
              Jun 30,2021
            </p>
          </div>
          <Image
            className="rounded-full cursor-pointer"
            src="/images/profile.png"
            width="40"
            height="40"
            // layout="fill"
            objectFit="cover"
          />
          <ChevronDownIcon className="h-5 w-5 text-xs text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
