import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { AlignLeft, Search, X } from "lucide-react";
import { DriverListItem } from "./DriverListItem";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "../../lib/utils";

export const DriverFilter = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShow((prev) => !prev)}
        variant={"outline"}
        className={cn(
          "flex items-center justify-between gap-3 fixed top-[13px]"
        )}
      >
        Filter Drivers
        {show ? <AlignLeft className="w-4 h-4" /> : <X className="w-4 h-4" />}
      </Button>
      <div
        className={cn(
          " w-[300px] p-3 opacity-100 duration-500 overflow-hidden  h-[calc(100svh-100px)] bg-white  fixed  z-50  ",
          show && " hidden"
        )}
      >
        <div>
          <p className="text-xs text-gray-500 ">GO</p>
          <h3 className="text-md font-bold">DRIVERS</h3>
        </div>
        <div className="flex border h-[33px] mt-[10px] border-gray-300 rounded pr-3 bg-gray-100 justify-center items-center">
          <Input
            placeholder="Search"
            className="border-none h-[33px] focus-visible:ring-0 focus:outline-lime-50"
          />
          <Search className="w-4 h-4" />
        </div>

        <Tabs defaultValue="all" className="w-full mt-[20px] ">
          <TabsList className=" w-full">
            <TabsTrigger className="w-[33%]" value="all">
              All (8)
            </TabsTrigger>
            <TabsTrigger className="w-[33%]" value="driving">
              Driving
            </TabsTrigger>
            <TabsTrigger className="w-[33%]" value="parked">
              Parked
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ScrollArea className="border py-2 bg-gray-100 px-2  h-[calc(100svh-260px)]">
              <DriverListItem status="on" />
              <DriverListItem status="park" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="driving">
            <ScrollArea className="border py-2 bg-gray-100 px-2  h-[calc(100svh-260px)]">
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
              <DriverListItem status="driving" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="parked">
            <ScrollArea className="border py-2 bg-gray-100 px-2  h-[calc(100svh-260px)]">
              <DriverListItem status="park" />
              <DriverListItem status="park" />
              <DriverListItem status="park" />
              <DriverListItem status="park" />

            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
