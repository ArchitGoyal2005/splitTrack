import ChatHeading from "@/components/friends/ChatHeading";
import SearchBar from "@/components/friends/SearchBar";
import { CiSearch } from "react-icons/ci";
import { TiPin } from "react-icons/ti";

export default function Page() {
  return (
    <div className="grid grid-cols-[8fr,2fr] gap-4 grid-rows-2 w-full h-full overflow-hidden">
      <div className="bg-slate-50 rounded-3xl row-span-2 w-full h-full p-6 overflow-x-hidden">
        <div className="grid grid-cols-[3.5fr,6.5fr] overflow-x-hidden">
          <div className="w-full flex flex-col gap-4 overflow-x-hidden">
            <SearchBar />
            <div className="flex flex-col gap-2 w-full h-full overflow-hidden">
              <ChatHeading isPinned />
              <ChatHeading />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 rounded-3xl w-full h-full ">
        <div></div>
      </div>
      <div className="bg-slate-50 rounded-3xl w-full h-full ">
        <div></div>
      </div>
    </div>
  );
}
