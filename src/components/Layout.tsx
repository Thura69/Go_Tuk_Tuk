import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Topbar } from "./Topbar";

export const Layout = () => {
  return (
    <div className=" flex">
      <SideBar />

      <div className="flex flex-col w-full">
       <Topbar/>

        <main className=" w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
