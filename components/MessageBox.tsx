import { CheckIcon } from "@heroicons/react/outline";

export interface MessageBoxProps {
  message: string;
  date: string;
  time: string;
  seen?: boolean;
  recieved: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  message,
  date,
  time,
  seen,
  recieved = true,
}) => {
  return (
    <div className="grid">
      <div className={`space-y-5 grid ${!recieved ? "justify-self-end" : ""}`}>
        <div
          className={`bg-mainBackground p-3 rounded-2xl text-white max-w-[90%] ${
            !recieved ? "justify-self-end" : "justify-self-start"
          }`}
        >
          <span className="bg-redd-200">{message}</span>
        </div>
        <div className={`flex items-center ${!recieved ? "justify-self-end" : ""}`}>
          <span>{date}</span>
          <span>{time}</span>
          {!recieved && (
            <div className="flex">
              <CheckIcon className="h-5 w-5 text-green-400" />
              {seen && <CheckIcon className="h-5 w-5 -ml-4 text-green-400" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
