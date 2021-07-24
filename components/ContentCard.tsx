import { DotsVerticalIcon, AnnotationIcon } from "@heroicons/react/outline";

export interface ContentCardProps {}

const ContentCard: React.SFC<ContentCardProps> = () => {
  return (
    <div className="ring-1 ring-gray-600 p-5 rounded-2xl bg-black shadow-2xl">
      <div className="flex justify-end">
        <DotsVerticalIcon className="h-5 w-5" />
      </div>
      <div className="flex items-center mb-5">
        <AnnotationIcon className="header-icon" />
        <div className="ml-5">
            <p className="font-bold text-xl text-white">History available</p>
            <p>Check your weekly transaction reports</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
