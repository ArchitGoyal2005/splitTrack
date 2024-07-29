import ChatHeading from "@/components/friends/ChatHeading";
import SearchBar from "@/components/friends/SearchBar";
import Expense from "@/components/friends/Expense";

export default function Page() {
  return (
    <div className="grid grid-cols-[8fr,2fr] gap-4 grid-rows-2 w-full h-full overflow-hidden">
      <div className="bg-zinc-50 rounded-3xl row-span-2 w-full h-full p-6 overflow-x-hidden">
        <div className="grid grid-cols-[3.5fr,6.5fr] h-full gap-8 overflow-x-hidden">
          <div className="w-full flex flex-col gap-4 overflow-x-hidden">
            <SearchBar />
            <div className="flex flex-col gap-2 w-full h-full overflow-hidden">
              <ChatHeading isPinned />
              <ChatHeading />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Design Chat</h1>
              <h3 className="text-lg font-semibold text-red-400">
                Total Expense : 530
              </h3>
            </div>
            <div className="flex flex-col gap-4 h-full justify-end">
              <Expense />
              <Expense />
              <Expense />
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
