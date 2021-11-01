import { ArrowNarrowDownIcon } from "@heroicons/react/outline";

interface Data {
  name: string;
  start: string;
  end: string;
  status: string;
}

export interface ActivityListProps {
  data: Data[];
}

const ActivityList: React.FC<ActivityListProps> = ({ data }) => {
  return (
    <div className="mt-10">
      <p className="text-white text-xl font-bold">Recent Activities</p>
      {data.map((data, index) => (
        <div key={index} className="grid grid-cols-5 mt-5">
          <ArrowNarrowDownIcon className="header-icon" />
          <p>{data.name}</p>
          <p>{data.start}</p>
          <p>{data.end}</p>
          <p className="text-right">{data.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
