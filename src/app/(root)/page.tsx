import SideMenu from "@/components/sideMenu";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function Home() {
  return (
    <main>
      <div>
        <SideMenu />
      </div>
    </main>
  );
}
export default Home;
