import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

export interface LineGraphProps {}

const CustomLabel: React.FC<any> = ({ x, y, stroke, value }) => {
  return (
    <text
      x={x}
      y={y}
      dy={-10}
      fill={"#cfccd1"}
      fontSize={15}
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  return (
    <>
      {active && payload && (
        <div className="flex">
          <div className="bg-purple-500 py-1 px-5 rounded-l-full w-1/3">
            <p className="flex justify-center text-white">7</p>
            <p className="flex justify-center text-white">min</p>
          </div>
          <div className="w-25 bg-black py-1 px-5 rounded-r-full">
            <p>${payload[0].value}</p>
            <p>7.06.2021</p>
          </div>
        </div>
      )}
    </>
  );
};

const RenderDot: React.FC<any> = (props: any) => {
  const { cx, cy, value } = props;
  return (
    <div>
      <div className="bg-black rounded-full h-6 w-6">
        <p>d</p>
      </div>
    </div>
  );
};

const LineGraph: React.FC<LineGraphProps> = () => {
  const data = [
    { name: "Page A", uv: 1000, pv: 900, amt: 2400, uvError: [75, 20] },
    { name: "Page B", uv: 300, pv: 250, amt: 2400, uvError: [90, 40] },
    { name: "Page C", uv: 280, pv: 230, amt: 2400, uvError: 40 },
    { name: "Page D", uv: 200, pv: 150, amt: 2400, uvError: 20 },
    { name: "Page E", uv: 278, pv: 228, amt: 2400, uvError: 28 },
    { name: "Page J", uv: 189, pv: 139, amt: 2400, uvError: [15, 60] },
    { name: "Page F", uv: 289, pv: 239, amt: 2400, uvError: [90, 20] },
    { name: "Page G", uv: 189, pv: 139, amt: 2400, uvError: [28, 40] },
    { name: "Page H", uv: 489, pv: 439, amt: 2400, uvError: 28 },
    { name: "Page I", uv: 89, pv: 39, amt: 2400, uvError: 28 },
  ];

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
        <div className="y-axis">1200K</div>
        <div className="col-span-7 row-span-6 border-b border-l flex items-center justify-center">
          <ResponsiveContainer width="90%" height="90%">
            <LineChart width={700} height={300} data={data}>
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#121217"
                strokeWidth={5}
                dot={false}
                activeDot={false}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#9256B8"
                strokeWidth={5}
                dot={{ stroke: "#8A8A8A", strokeWidth: 5 }}
                activeDot={false}
                label={<CustomLabel />}
              />
            </LineChart>
          </ResponsiveContainer>
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
    </div>
  );
};

export default LineGraph;
