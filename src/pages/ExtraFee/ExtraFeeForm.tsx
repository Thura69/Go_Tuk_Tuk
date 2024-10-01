import { Form } from "../../components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/forms/InputField";
import SwitchField from "../../components/forms/SwitchField";
import { cn } from "../../lib/utils";
import ModalConfirmBtns from "../../components/common/ModalConfirmBtns";
import { useMutation } from "@apollo/client";
import { ADD_EXTRAFEES, GETALL_EXTRAFEES } from "../../graphql/extraFee";

type UserFormType = {
  editData?: any;
  toggle: () => void;
  editMode: boolean;
};

const fieldHeight = "h-[40px] md:h-[44px] ";
const filedWidth = "md:w-[calc(50%-10px)] w-full";
const formContainer =
  "flex flex-col md:flex-row   justify-between items-center";

export const ExtraFeeForm: React.FC<UserFormType> = ({
  editData,
  toggle,
  editMode,
}) => {
  const [updateService, { loading }] = useMutation(ADD_EXTRAFEES, {
    refetchQueries: [GETALL_EXTRAFEES],
  });

  const FormSchema = yup.object({
    name: yup.string(),
    disabled: yup.boolean(),
    amount: yup.number(),
  });

  const form = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: editData
      ? editData
      : {
          name: "",
          created_at: "",
          disabled: false,
          amount: 0,
        },
  });

  const handleOnSave = async (data: any) => {
    await updateService({
      variables: {
        name: data?.name,
        disabled: data?.disabled,
        amount: data?.amount,
      },
    });
    toggle();
  };

  return (
    <Form {...form}>
      <form
        className="sm:space-y-[16px]"
        onSubmit={form.handleSubmit(handleOnSave)}
      >
        <div className={formContainer}>
          <InputField
            disabled={false}
            labelTitle="Name"
            fieldName="name"
            placeholder={"Type Here"}
            required={false}
            languageName={"career"}
            fieldHeight={cn(" w-full", fieldHeight)}
            fieldWidth={filedWidth}
          />
          <InputField
            disabled={editMode ? true : false}
            labelTitle="Amount"
            fieldName="amount"
            type="number"
            placeholder={"Type Here"}
            required={false}
            languageName={"career"}
            fieldHeight={cn(" w-full", fieldHeight)}
            fieldWidth={filedWidth}
          />
        </div>
        <div className={"flex gap-[20px]"}>
          <SwitchField
            title="Disabled"
            fieldName="disabled"
            required={false}
            fieldHeight=""
            fieldWidth=""
          />
        </div>
        <ModalConfirmBtns
          size={"lg"}
          width="w-[100px] rounded-md"
          isLoading={loading}
          editMode={false}
          toggle={toggle}
        />
      </form>
    </Form>
  );
};
