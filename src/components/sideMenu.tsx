import React from "react";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { FaSignOutAlt, FaUserFriends } from "react-icons/fa";
import { SiGoogleanalytics, SiWebmoney } from "react-icons/si";
import { IoHomeSharp } from "react-icons/io5";
import Link from "next/link";
import SideBarLink from "./sideBarLink";

function SideMenu() {
  return (
    <aside
      id="default-sidebar"
      className="w-48 flex flex-col h-screen bg-inherit"
      aria-label="Sidebar"
    >
      <div className="h-full px-4 py-8 overflow-y-auto flex flex-col justify-start gap-12 items-center">
        <Link href="/">
          <SiWebmoney className="h-10 w-10 text-slate-100 hover:scale-105" />
        </Link>
        <ul className=" w-full gap-8 justify-center items-start flex flex-col font-medium">
          <SideBarLink href="/">
            <IoHomeSharp />
            <span className="">Home</span>
          </SideBarLink>
          <SideBarLink href="/friends">
            <FaUserFriends />
            <span className="">Friends</span>
          </SideBarLink>
          <SideBarLink href="/analytics">
            <SiGoogleanalytics />
            <span className="">Analytics</span>
          </SideBarLink>
          <SideBarLink href="/profile">
            <UserButton />
            <span className="">Profile</span>
          </SideBarLink>
          <li className="rounded-xl w-full">
            <div className="flex items-center gap-4 px-6 rounded-xl py-2 text-gray-500 active:text-gray-300 hover:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700 group">
              <FaSignOutAlt />
              <span className="">
                <SignOutButton />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideMenu;
