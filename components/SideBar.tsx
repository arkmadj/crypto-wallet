import {
  CreditCardIcon,
  CurrencyDollarIcon,
  DesktopComputerIcon,
  RefreshIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  CogIcon
} from "@heroicons/react/outline";

export interface SideBarProps {}

const SideBar: React.SFC<SideBarProps> = () => {
  return (
    <div className="w-[13%] h-full flex flex-col mt-16">
      {/* Top */}
      <div className="space-y-6">
        <div className="flex bg-pink-200 bg-opacity-30 h-10 rounded-sm">
          <div className="h-full w-2 bg-pink-600 rounded-full justify-start"></div>
          <div className="flex flex-grow items-center ml-10">
            <DesktopComputerIcon className="w-8 h-8 text-pink-600" />
            <p className="ml-3">Dashboard</p>
          </div>
        </div>
        <div className="flex hover:bg-orange-200 hover:bg-opacity-30 h-10 rounded-sm">
          <div className="h-full w-2 bg-orange-600 rounded-full justify-start"></div>
          <div className="flex flex-grow items-center ml-10">
            <CreditCardIcon className="w-8 h-8 text-orange-700" />
            <p className="ml-3">My Wallet</p>
          </div>
        </div>
        <div className="flex hover:bg-yellow-200 hover:bg-opacity-30 h-10 rounded-sm">
          <div className="h-full w-2 bg-yellow-600 rounded-full justify-start"></div>
          <div className="flex flex-grow items-center ml-10">
            <CurrencyDollarIcon className="w-8 h-8 text-yellow-600" />
            <p className="ml-3">Transaction</p>
          </div>
        </div>
        <div className="flex hover:bg-teal-200 hover:bg-opacity-30 h-10 rounded-sm">
          <div className="h-full w-2 bg-teal-600 rounded-full justify-start"></div>
          <div className="flex flex-grow items-center ml-10">
            <RefreshIcon className="w-8 h-8 text-teal-300" />
            <p className="ml-3">Exchange</p>
          </div>
        </div>
      </div>
      {/* Middle */}
      <div className="flex flex-grow"></div>
      {/* Bottom */}
      <div className="sticky bottom-0">
        <div className="">
          <p className="text-white ml-10 mb-16 font-bold text-xl">Partner Service</p>
        </div>
        <div className="space-y-6 mb-10">
          <div className="flex h-10">
            <div className="flex flex-grow items-center ml-10">
              <PresentationChartLineIcon className="w-8 h-8 text-gray-500" />
              <p className="ml-3">OTS</p>
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex flex-grow items-center ml-10">
              <PresentationChartBarIcon className="w-8 h-8 text-gray-500" />
              <p className="ml-3">MTS</p>
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex flex-grow items-center ml-10">
              <CogIcon className="w-8 h-8 text-gray-500" />
              <p className="ml-3">Tradebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
