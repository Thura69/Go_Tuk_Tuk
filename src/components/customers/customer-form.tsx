// import { yupResolver } from "@hookform/resolvers/yup";
// import { Form } from "../ui/form";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

type CustomerFormType = {
  editData?: any;
  toggle: () => void;
  editMode: boolean;
};

export const CustomerForm: React.FC<CustomerFormType> = ({
 
}) => {
//   const FormSchema = yup.object({
//     balance: yup.string(),
//     created_at: yup.string(),
//     disabled: yup.boolean(),
//     driver_id: yup.number(),
//   });

//   const form = useForm({
//     resolver: yupResolver(FormSchema),
//     defaultValues: editData
//       ? editData
//       : {
//           balance: "",
//           created_at: "",
//           disabled: false,
//           driver_id: null,
//         },
//   });

  return <div>Hello</div>;
};
