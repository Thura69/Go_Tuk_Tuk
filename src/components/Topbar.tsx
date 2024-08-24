import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import useTimeOfDay from "../hooks/useGreeting";

export const Topbar = () => {
  const { styles, timeOfDay } = useTimeOfDay();
  return (
    <div className="h-[82px] border-b flex items-center justify-end px-[30px]">
      <div>
        <h1 style={styles} className="font leading-none tracking-tight">
          Good {timeOfDay}!
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <BellIcon className=" ml-4 text-gray-400 w-[20px] " />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
