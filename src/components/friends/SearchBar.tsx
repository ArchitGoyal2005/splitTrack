import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="flex items-center text-sm bg-indigo-200 border-gray-300 rounded-xl px-4 py-2 w-full">
      <CiSearch className="h-6 w-6" />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 w-full border-none outline-none bg-indigo-200 text-gray-700"
      />
    </div>
  );
}
