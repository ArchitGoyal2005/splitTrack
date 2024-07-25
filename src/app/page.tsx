import SideMenu from "@/components/sideMenu";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export default function Home() {
  const { user } = auth();
  console.log(user);

  return (
    <main>
      <SideMenu />
    </main>
  );
}
