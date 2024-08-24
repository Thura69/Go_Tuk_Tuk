import { cn } from "../../lib/utils";

type ActiveBadgeProps = {
  rounded?: boolean;
};

const InactiveBadge: React.FC<ActiveBadgeProps> = ({ rounded = false }) => {
  return (
    <div
      className={cn(
        "bg-red-100 w-[150px]  h-8  items-center px-3 rounded flex justify-center",
        rounded && "rounded-[100px] p-2 w-auto"
      )}
    >
      <span className="text-xs text-danger-500 font-medium">Inactive</span>
    </div>
  );
};

export default InactiveBadge;
