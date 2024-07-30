import ChatDetails from "./ChatDetails";

function Expense() {
  return (
    <div className="flex items-end justify-start gap-4">
      <div className="w-10 h-10 bg-gray-950 flex items-center justify-center text-xl text-white rounded-md flex-shrink-0">
        DC
      </div>
      <div className="w-3/5 h-fit p-4 rounded-lg flex flex-col gap-2 bg-stone-100 shadow-md">
        <h6 className="text-indigo-500 text-sm self-start font-semibold">
          John Smith
        </h6>
        <div className="flex flex-col items-between gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-zinc-900 font-semibold ">Pizza</h1>
            <p className="text-zinc-700 text-xs self-end">Your Share :</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-600 self-end">
              Total Expense : <span className="font-semibold">20,000</span>
            </p>
            <h6 className="text-lg self-start text-red-600 font-bold">1,200</h6>
          </div>
        </div>
        <ChatDetails />
      </div>
    </div>
  );
}

export default Expense;
