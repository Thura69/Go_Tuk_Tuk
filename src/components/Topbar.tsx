import { BellIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import useTimeOfDay from "../hooks/useGreeting";
import MORNING from "../assets/sunrise-svgrepo-com.svg";
import AFTERNOON from '../assets/sunny-sun-svgrepo-com.svg';
import NIGHT from '../assets/lantern-night-svgrepo-com.svg';

export const Topbar = () => {
  const {  timeOfDay } = useTimeOfDay();
  return (
    <div className="h-[82px] border-b flex items-center justify-end px-[30px]">
      <div>
         {
           timeOfDay === 'morning' && <img className="w-8 h-8" src={MORNING}/>
         }
          {
           timeOfDay === 'afternoon' && <img className="w-8 h-8" src={AFTERNOON}/>
         }
          {
           timeOfDay === 'night' && <img className="w-8 h-8" src={NIGHT}/>
         }
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
