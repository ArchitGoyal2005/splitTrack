import React, { Children } from "react";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { FaSignOutAlt, FaUserFriends } from "react-icons/fa";
import { SiGoogleanalytics, SiWebmoney } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";
import Link from "next/link";

function SideMenu() {
  return (
    <div className="w-full h-full flex-grow-0">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-8 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/">
                <SiWebmoney className="h-10 w-10 ml-6 mb-8" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoHomeSharp />

                <span className="ms-3">Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/friends"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUserFriends />
                <span className="flex-1 ms-3 whitespace-nowrap">Friends</span>
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiGoogleanalytics />
                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <UserButton />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaSignOutAlt />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  <SignOutButton />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
export default SideMenu;
