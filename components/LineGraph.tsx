import { ChevronDownIcon } from "@heroicons/react/solid";

export interface LineGraphProps {}

const LineGraph: React.SFC<LineGraphProps> = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-xl font-bold">Market overview</p>
          <p className="text-gray-400 text-xs">Price value updates</p>
        </div>
        <div className="flex text-gray-400 items-center">
          <p>Weekly(2021)</p>
          <ChevronDownIcon className="h-5 w-5 text-xs text-gray-500" />
        </div>
      </div>
      <div className="h-80 grid grid-cols-8 grid-rows-6 border-t mt-5">
        {/* <p>Line Graph</p> */}
        <div className="y-axis">1200K</div>
        <div className="col-span-7 row-span-6 border-b border-l flex items-center justify-center">
          Line Graph
        </div>
        <div className="y-axis">1000K</div>
        <div className="y-axis">800K</div>
        <div className="y-axis">600K</div>
        <div className="y-axis">400K</div>
        <div className="y-axis">200K</div>
        <div className="y-axis border-0"></div>
        <div className="x-axis">Mon</div>
        <div className="x-axis">Tue</div>
        <div className="x-axis">Wed</div>
        <div className="x-axis">Thu</div>
        <div className="x-axis">Fri</div>
        <div className="x-axis">Sat</div>
        <div className="x-axis">Sun</div>
      </div>
      {/* <div className="relative">
          <div className="bg-red-300 absolute top-0 left-0 w-10 h-10">
          </div>
          <div className="absolute top-0 left-0 w-10 h-10 flex justify-center items-center">
              O
          </div>
      </div> */}
    </div>
  );
};

export default LineGraph;
