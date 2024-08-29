import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "../lib/utils";
import LOGO from "../assets/Group 47556.svg";
import { Separator } from "../components/ui/separator";
import useMenus from "../lib/UseMenus";
import { ScrollArea } from "./ui/scroll-area";
import { LogOut, Settings } from "lucide-react";
import { Switch } from "./ui/switch";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
        "   bg-gray-50 relative  flex flex-col duration-500 w-[80px] ",
        open && "w-[250px]"
      )}
    >
      <div className="p-3  gap-5  flex items-center justify-start">
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className=" rounded-md  border-sky-500 p-0 w-[50px] h-[50px]  border-[1px] bg-sky-500"
          type="button"
          variant={"outline"}
        >
          <img src={LOGO} className="w-[30px] h-[30px]" alt="logo" />
        </Button>
      </div>
      <Separator />

      <ScrollArea className="p-3">
        <div className="h-[30px] text-start ml-5 text-gray-400 text-sm">
          {open && <p>Menus</p>}
        </div>
        <div className=" space-y-1">
          {MENUS.map((e, index) => (
            <Button
              key={index}
              onClick={() => navigate(`${e.path}`)}
              className={cn(
                "  rounded-md border-none drop-shadow-none p-0 w-full  h-[30px]  shadow-none bg-gray-50 flex justify-start hover:bg-gray-50  gap-4 ",
                location.pathname === e.path &&
                  "bg-sky-300 hover:bg-sky-400 rounded text-white"
              )}
              type="button"
              variant={"outline"}
            >
              {e.icon}

              {/* <Tooltip style={{ zIndex: 1000 }} content={e.name}>
                Hello
              </Tooltip> */}
              {open && (
                <p
                  className={cn(
                    "text-gray-500",
                    location.pathname === e.path && "text-white"
                  )}
                >
                  {e.name}
                </p>
              )}
            </Button>
          ))}
          <div className="pt-[65px] space-y-1">
            <div className="h-[30px] text-start ml-5 text-gray-400 text-sm">
              {open && <p>Account</p>}
            </div>
            <Button
              className=" rounded-md border-none drop-shadow-none p-0 w-full  h-[30px]  shadow-none bg-gray-50 flex justify-start  gap-4 "
              type="button"
              variant={"outline"}
            >
              <Settings className=" ml-4 text-gray-400 w-[20px] " />
              {open && <p className="text-gray-500">Settings</p>}
            </Button>
            <Button
              className=" rounded-md border-none drop-shadow-none p-0 w-full  h-[30px]  shadow-none bg-gray-50 flex justify-start  gap-4 "
              type="button"
              variant={"outline"}
            >
              <LogOut
                onClick={handleLogOut}
                className=" ml-4 text-gray-400 w-[20px] "
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
      </ScrollArea>
    </div>
  );
};
