import { Button } from "../..//components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import { FormControl } from "../../components/ui/form";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "../../components/ui/popover";
import { cn } from "../../lib/utils";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useFormContext } from "react-hook-form";

interface MultiSelectDropProps {
  popoverOpen: boolean;
  setPopoverOpen: (data: any) => void;
  field: any;
  additionalData: any;
  languageTitle: string;
  fieldName: string;
  placeHolder?: string;
  height?: string;
  disabled?: boolean;
}

export const MultiSelectDrop: React.FC<MultiSelectDropProps> = ({
  popoverOpen,
  setPopoverOpen,
  field,
  additionalData,
  placeHolder,
  fieldName,
  height,
  disabled = false,
}) => {
  const form = useFormContext();

  return (
    <Popover modal open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger className="w-full" asChild>
        <FormControl className=" w-full">
          <Button
            {...field}
            disabled={disabled}
            variant="outline"
            role="combobox"
            className={cn(
              `w-full border-[1px] disabled:bg-[#F1F5FB] disabled:opacity-100 disabled:border-none border-[#A0AEC0]  text-sideMenuTextColor2 disabled:text-secondaryTextColor  justify-between focus:ring-primary-500 focus:ring-offset-2 focus:ring-2`,
              !field.value && "text-[#A0AEC0]",
              height
            )}
          >
            {field.value ? (
              additionalData.find(
                (language: any) => language.value === field.value
              )?.label
            ) : (
              <span className="text-[14px] text-inherit">
                {" "}
                {placeHolder ? placeHolder : "select"}
              </span>
            )}
            <ChevronDownIcon className="ml-2  text-slate-400 h-[20px] w-[20px] shrink-0 " />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className={cn(` w-[500px] max-w-[700px] p-0`)}>
        <Command className="">
          <CommandInput placeholder={"Search"} className="h-9" />
          <CommandList className="">
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {additionalData.map((item: any) => (
                <CommandItem
                  value={item.label}
                  key={item.value}
                  onSelect={() => {
                    form.setValue(fieldName, item.value);
                    setPopoverOpen(false);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      item.value === field.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
