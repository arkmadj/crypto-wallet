import {
  BellIcon,
  SearchIcon,
  AnnotationIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="sticky top-0 bg-mainBackground flex items-center py-10 px-20">
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
            <Image
              className="rounded-full cursor-pointer"
              src="/images/profile.png"
              width="40"
              height="40"
              // layout="fill"
              objectFit="cover"
            />
          </Link>
          <ChevronDownIcon className="h-5 w-5 text-xs text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
