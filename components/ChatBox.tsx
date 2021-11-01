import { PlusCircleIcon } from "@heroicons/react/outline";
import Button from "./Button";
import MessageBox from "./MessageBox";
export interface ChatBoxProps {}

const ChatBox: React.FC<ChatBoxProps> = () => {
  return (
    <div className="space-y-3">
      <div className="border border-gray-600 bg-converterBackground h-[65vh] rounded-3xl p-5 space-y-3">
        <div className="flex space-x-3 items-center">
          <span className="font-bold text-white">D_ZULTAN</span>
          <span className="text-green-400">online</span>
        </div>
        <div className="invisible-scroll-bar space-y-5 overflow-y-auto h-[95%]">
          <MessageBox
            message="Eu nisi commodo reprehenderit aute ipsum. Duis esse tempor sint officia. Cillum culpa eiusmod id occaecat fugiat et sint enim laborum commodo non duis. Nisi exercitation ut nisi cillum et nostrud incididunt. Tempor dolore deserunt excepteur deserunt sunt Lorem irure nostrud deserunt commodo elit enim dolore. Qui fugiat cillum velit ad ipsum duis nostrud cillum quis consectetur. Consequat minim enim veniam adipisicing minim aliquip. Fugiat elit eu adipisicing labore duis sunt eu oanim reprehenderit amet quis consectetur. Fugiat commodo dolore elit adipisicing aliquip incididunt amet sint adipisicing amet veniam deserunt. Nulla id id culpa elit."
            date="30.06.2021"
            time="12:46 AM"
            seen={true}
            recieved={true}
          />
          <MessageBox
            message="Hi"
            date="30.06.2021"
            time="12:46 AM"
            seen={false}
            recieved={false}
          />
          <MessageBox
            message="Voluptate minim ut exercitation anim et aliquip dolor id proident consequat excepteur irure cupidatat Lorem."
            date="30.06.2021"
            time="12:46 AM"
            seen={true}
            recieved={true}
          />
          <MessageBox
            message="Voluptate minim ut exercitation anim et aliquip dolor id proident consequat excepteur irure cupidatat Lorem."
            date="30.06.2021"
            time="12:46 AM"
            seen={true}
            recieved={false}
          />
          <MessageBox
            message="Hi"
            date="30.06.2021"
            time="12:46 AM"
            seen={true}
            recieved={false}
          />
          <MessageBox
            message="Hi"
            date="30.06.2021"
            time="12:46 AM"
            seen={true}
            recieved={true}
          />
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <PlusCircleIcon className="h-10 w-10 text-pink-600" />
        <div className="flex h-10 bg-mainBackground w-full rounded-3xl items-center justify-between">
          <input
            type="text"
            className="bg-transparent outline-none ml-2"
            placeholder="Type your message..."
          />
          <div className="w-3/12 rounded-2xl bg-gray-300 flex justify-center text-black px-5 py-2 font-bold cursor-pointer hover:bg-gray-400">
            <p>Send</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
