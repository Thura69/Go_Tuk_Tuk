import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "../lib/utils";
import LOGO from "../assets/Group 47556.svg";
import { Separator } from "../components/ui/separator";
import useMenus from "../lib/UseMenus";
import { LogOut, Settings } from "lucide-react";
import { Switch } from "./ui/switch";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";


export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const MENUS = useMenus();

  const handleLogOut = () => {
    window.localStorage.removeItem("login");
    navigate("/"); // This will now work correctly
  };

  return (
    <div
      className={cn(
        "   bg-gray-50 relative   z-[1000] flex  flex-col  w-[60px] ",
        open && "w-[200px]"
      )}
    >
      <div className="p-2  gap-5 h-[60px] flex items-center justify-start">
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className=" rounded-sm  border-sky-500 p-0  bg-sky-500 w-full  "
          type="button"
          variant={"outline"}
        >
          <img src={LOGO} className="w-[20px] h-[20px]" alt="logo" />
        </Button>
      </div>
      <Separator />

      <div className=" p-2  z-0">
        <div className="h-[30px] text-start ml-5 text-gray-400 text-sm">
          {open && <p>Menus</p>}
        </div>
        <div className="  z-0 space-y-1">
          {MENUS.map((e, index) => (
            <Button
              id={`my-anchor-element-${index}`}
              key={index}
              onClick={() => navigate(`${e.path}`)}
              className={cn(
                "   relative border-none drop-shadow-none p-0 w-full   shadow-none bg-gray-50  flex gap-1 justify-start hover:bg-gray-200 border-2  rounded-[2px]  duration-200   ",
                location.pathname === e.path &&
                  "bg-sky-300/80 hover:bg-sky-300   rounded-[2px]  text-white"
              )}
              type="button"
              variant={"outline"}
            >
           <div className=" overflow-hidden  w-[43px] flex items-center justify-center  ">   {e.icon}</div>

              {!open ? (
                <Tooltip
                  style={{ zIndex: 1000,backgroundColor:'#2c3e50' }}
                  className="bg-blue-400"
                  place="top"
                  anchorSelect={`#my-anchor-element-${index}`}
                  content={e.name}
                />
              ) : null}
                <p
                  className={cn( 
                    "text-gray-500 duration-1000 overflow-hidden  w-0",
                    location.pathname === e.path && "text-white",
                    open && 'w-auto'
                    
                  )}
                >
                  {e.name}
                </p>
            </Button>
          ))}
          <div className="pt-[65px] space-y-1">
            <div className="h-[30px] text-start ml-5 overflow-hidden text-gray-400 text-sm">
              {open && <p>Account</p>}
            </div>
            <Button
              className=" rounded-md border-none drop-shadow-none p-0 w-full  h-[30px]  shadow-none bg-gray-50 flex justify-start  gap-4 "
              type="button"
              variant={"outline"}
            >
              <Settings className=" ml-3 text-gray-400 w-[20px] " />
              {open && <p className="text-gray-500">Settings</p>}
            </Button>
            <Button
              className=" rounded-md border-none drop-shadow-none p-0 w-full  h-[30px]  shadow-none bg-gray-50 flex justify-start  gap-4 "
              type="button"
              variant={"outline"}
            >
              <LogOut
                onClick={handleLogOut}
                className=" ml-3 text-gray-400 w-[20px] "
              />
              {open && <p className="text-gray-500">Log Out</p>}
            </Button>
            <Button
              className=" rounded-md border-none drop-shadow-none p-0 w-full  h-[30px]  shadow-none bg-gray-50 flex justify-start  gap-4 "
              type="button"
              variant={"outline"}
            >
              <Switch className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
