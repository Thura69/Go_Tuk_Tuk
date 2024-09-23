import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Form } from "../ui/form";
import * as yup from "yup";
import InputField from "../forms/InputField";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import Radiofield from "../forms/RadioField";

type UserFormType = {
  editData?: any;
  toggle: () => void;
  editMode: boolean;
};

const fieldHeight = "h-[40px] md:h-[44px] ";
const filedWidth = "md:w-[calc(50%-10px)] w-full";
const formContainer =
  "flex flex-col md:flex-row   justify-between items-center";

export const TopUpForm: React.FC<UserFormType> = ({ editData, toggle }) => {
  const [checkReceipt, setCheckReceipt] = useState(false);
  const FormSchema = yup.object({
    name: yup.string(),
    amount: yup.number(),
    status: yup.boolean(),
    phone: yup.string(),
    profile_picture_url: yup.string(),
  });

  const form = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: editData.driver.name,
      amount: editData.amount,
      status: editData.status,
      phone: editData.driver.phone,
      profile_picture_url: editData.driver.profile_picture_url,
    },
  });

  const handleOnSave = async () => {
    toggle();
  };

  return (
    <Form {...form}>
      <form
        className="sm:space-y-[16px]"
        onSubmit={form.handleSubmit(handleOnSave)}
      >
        <Avatar>
          <AvatarImage
            className="w-[100px]  object-fill h-[100px] rounded-md"
            src={
              editData.driver.profile_picture_url
                ? editData.driver.profile_picture_url
                : "https://github.com/shadcn.png"
            }
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {checkReceipt && (
          <div className=" w-[500px] top-[-20%] left-[70px]  fixed">
            <X
              onClick={() => setCheckReceipt(false)}
              className=" border hover:scale-110 border-purple-600 bg-white absolute right-2 top-2 cursor-pointer"
            />
            <Avatar>
              <AvatarImage
                className=" w-auto  object-fill h-auto rounded-md"
                src={
                  editData.top_up.receipt_photo_url
                    ? editData.top_up.receipt_photo_url
                    : "https://github.com/shadcn.png"
                }
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        )}

        <div className={formContainer}>
          <InputField
            disabled={true}
            labelTitle="Name"
            fieldName="name"
            placeholder={"Type Here"}
            required={false}
            languageName={"career"}
            fieldHeight={cn(" w-full", fieldHeight)}
            fieldWidth={filedWidth}
          />
          <InputField
            disabled={true}
            labelTitle="Amount"
            fieldName="amount"
            placeholder={"Type Here"}
            required={false}
            languageName={"career"}
            fieldHeight={cn(" w-full", fieldHeight)}
            fieldWidth={filedWidth}
          />
        </div>
        <div className={formContainer}>
          <InputField
            disabled={true}
            labelTitle="Phone"
            fieldName="phone"
            placeholder={"Type Here"}
            required={false}
            languageName={"career"}
            fieldHeight={cn(" w-full", fieldHeight)}
            fieldWidth={filedWidth}
          />
          <InputField
            disabled={true}
            labelTitle="Status"
            fieldName="status"
            placeholder={"Type Here"}
            required={false}
            languageName={"career"}
            fieldHeight={cn(" w-full", fieldHeight)}
            fieldWidth={filedWidth}
          />
        </div>
        <Button
          className="w-full"
          onClick={() => setCheckReceipt((prev) => !prev)}
        >
          Check Receipt
        </Button>
        <Radiofield
          languageName="vaccineEmployee"
          fieldName={"proofofVaccination"}
        />

        <div className="w-full flex py-2 mt-2  justify-center sm:justify-end gap-2">
          <Button
            type="button"
            onClick={toggle}
            size={"lg"}
            variant="outline"
            className={cn(` w-[100px] "opacity-50"}`)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};
