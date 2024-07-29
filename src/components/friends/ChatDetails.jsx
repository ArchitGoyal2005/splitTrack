"use client";

import { useState } from "react";

function ChatDetails() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      {showDetails && (
        <>
          <div className="grid grid-cols-2 gap-2 place-content-between w-full">
            <h6 className=" col-span-2  text-indigo-700 font-semibold">
              Paid By
            </h6>
            <span className="text-sm font-medium">John Smith</span>
            <span className="text-sm font-semibold">20,000</span>
            <span className="text-sm font-medium">Bla Bla Smith</span>
            <span className="text-sm font-semibold">40,000</span>
          </div>
          <div className="grid grid-cols-2 gap-2 place-content-between w-full">
            <h6 className=" col-span-2  text-indigo-700 font-semibold">
              Shares
            </h6>
            <span className="text-sm font-medium">John Smith</span>
            <span className="text-sm font-semibold">20,000</span>
            <span className="text-sm font-medium">Bla Bla Smith</span>
            <span className="text-sm font-semibold">40,000</span>
          </div>
        </>
      )}
      <div className="flex justify-between items-center">
        <button
          className="text-xs text-indigo-500 hover:underline font-medium"
          onClick={() => setShowDetails(!showDetails)}
        >
          Show {showDetails ? "Less" : "Details"}
        </button>
        <span className="text-xs font-semibold self-end text-gray-400">
          04:30
        </span>
      </div>
    </>
  );
}

export default ChatDetails;
