import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ResponsiveContainer, LineChart, Line } from "recharts";

interface GraphData {
  value: number;
}

export interface CardProps {
  name: string;
  subtext: string;
  price: string;
  percent: string;
  icon: string;
  graphData: GraphData[];
}

const Card: React.FC<CardProps> = ({ name, subtext, price, percent, icon, graphData }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 bg-black w-1/4 rounded-xl p-5 h-48 shadow-2xl border border-gray-600">
      <div className="bg-pink-600 flex items-center justify-center text-white font-bold text-5xl rounded-3xl row-span-2">
        <p>{icon}</p>
      </div>
      <div className="flex justify-between col-span-3">
        <p>{name}</p>
        <DotsVerticalIcon className="h-5 w-5" />
      </div>
      <div className="">
        <p>{subtext}</p>
      </div>
      <div className="col-span-2 row-span-3 flex items-center justify-center">
        {/* <p>Line Graph</p> */}

        <ResponsiveContainer width="90%" height="90%">
          <LineChart width={700} height={300} data={graphData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FFBB00"
              strokeWidth={5}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-2 row-span-2">
        <p className="font-bold text-4xl text-white">{price}</p>
        <p>{percent}% This week</p>
      </div>
    </div>
  );
};

export default Card;
