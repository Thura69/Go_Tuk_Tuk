import { cn } from "../../lib/utils";

type ActiveBadgeProps = {
  rounded?: boolean;
};

const ActiveBadge: React.FC<ActiveBadgeProps> = ({ rounded = false }) => {
  return (
    <div
      className={cn(
        "bg-green-100 rounded w-[150px] p-2 px-3  flex justify-center",
        rounded && "rounded-[100px] p-2"
      )}
    >
      <span
        className={cn(
          "text-xs text-green-500 font-medium",
          rounded && "text-[#338C93]"
        )}
      >
        Active
      </span>
    </div>
  );
};

export default ActiveBadge;
