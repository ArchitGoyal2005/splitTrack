"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideBarLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const pathname = usePathname();

  return (
    <li className="rounded-xl w-full">
      <Link
        href={href}
        className={`flex items-center gap-4 px-6 rounded-xl py-2  hover:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-700 group ${
          pathname === href ? "text-gray-100" : "text-gray-500"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
