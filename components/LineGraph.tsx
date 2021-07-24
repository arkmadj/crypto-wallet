import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Tooltip,
  CartesianGrid,
  Legend,
  Brush,
  ErrorBar,
  AreaChart,
  Area,
  Label,
  LabelList,
} from "recharts";

import { scalePow, scaleLog } from "d3-scale";

export interface LineGraphProps {}

const CustomLabel: React.FC<any> = ({ x, y, stroke, value }) => {
  return (
    <text
      // className="text-blue-50"
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
    // <svg
    //   x={cx - 10}
    //   y={cy - 10}
    //   width={20}
    //   height={20}
    //   fill="green"
    //   viewBox="0 0 1024 1024"
    // >
    //   <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
    // </svg>
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

          {/* <div className="bg-black rounded-full h-6 w-6"></div> */}
        </div>
      </div>
      <div className="h-80 grid grid-cols-8 grid-rows-6 border-t mt-5">
        {/* <p>Line Graph</p> */}
        <div className="y-axis">1200K</div>
        <div className="col-span-7 row-span-6 border-b border-l flex items-center justify-center">
          {/* Line Graph */}
          <ResponsiveContainer width="90%" height="90%">
            <LineChart width={700} height={300} data={data}>
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#121217"
                strokeWidth={5}
                // dot={{ stroke: "#121217", strokeWidth: 5 }}
                dot={false}
                activeDot={false}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#9256B8"
                // yAxisId={0}
                strokeWidth={5}
                dot={{ stroke: "#8A8A8A", strokeWidth: 5 }}
                // dot={<RenderDot />}
                activeDot={false}
                label={<CustomLabel />}
                // label
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
