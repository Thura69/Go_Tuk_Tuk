import { useState } from "react"
import { Badge } from "../ui/badge"
import { cn } from "../../lib/utils";


export const DriverListItem = () => {
    const [detail,setDetail] = useState(false);
  return (
    <div onClick={()=>setDetail((prev)=>!prev)} className={cn('w-full duration-500 rounded mb-2 bg-white shadow flex items-start pt-[10px] cursor-pointer justify-between h-[50px] px-3 ',detail && 'h-[200px] items-start pt-[10px] ')}>
    <div className="flex  gap-1 items-center">
      <div className=" relative w-[33px] h-[33px]">
        <img
          className="w-[33px] h-[33px] rounded-full object-cover"
          src="https://info.drivedifferent.com/hubfs/SMI-BLOG-Ways-to-Improve-Drivers-Happiness%20%281%29.jpg"
        />
        <span
          className={`absolute top-[-4px] right-[-5px] w-4 h-4 rounded-full border-2 border-white ${
            true ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </div>
      <h3 className="text-xs font-semibold">John Cane</h3>
    </div>
    <Badge  className="h-[24px] mt-1 text-xs">On Time</Badge>
  </div>
  )
}
