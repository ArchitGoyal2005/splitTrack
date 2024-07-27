import React from "react";
import { TiPin } from "react-icons/ti";

export default function ChatHeading({ isPinned }: { isPinned?: Boolean }) {
  return (
    <div className="flex justify-start items-center gap-4 w-full h-16 py-2 px-2 rounded-lg overflow-hidden hover:bg-gray-200 cursor-pointer">
      <div className="w-10 h-10 bg-gray-950 flex items-center justify-center text-xl text-white rounded-md flex-shrink-0">
        DC
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold">Design Chat</h4>
          <p className="text-xs text-gray-400 self-start">4m</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="overflow-x-hidden whitespace-nowrap text-ellipsis w-full text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            facere nisi autem possimus temporibus ullam aperiam praesentium fuga
            explicabo natus quidem quo minima sapiente necessitatibus ab, sint
            consequuntur, exercitationem ducimus.
          </p>
          {isPinned && <TiPin className="h-6 w-6 text-indigo-600" />}
        </div>
      </div>
    </div>
  );
}
