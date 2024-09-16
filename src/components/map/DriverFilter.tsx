import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import { Search } from "lucide-react";
import { DriverListItem } from "./DriverListItem";
import { ScrollArea } from "../ui/scroll-area";

export const DriverFilter = () => {
  return (
    <div className=" w-[300px] h-[calc(100svh-81px)] bg-white p-3 ">
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
        <TabsContent value="all" >
       <ScrollArea className="border py-2 bg-gray-100 px-2  h-[500px]">
       <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>
        <DriverListItem/>


       </ScrollArea>

        </TabsContent>
        <TabsContent value="driving">Change your password here.</TabsContent>
        <TabsContent value="parked">Change your parked here.</TabsContent>
      </Tabs>
    </div>
  );
};
