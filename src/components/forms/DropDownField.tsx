import EmployeeInformationDrop from "../../components/common/MultidropDown";
import { FormField, FormLabel, FormItem } from "../../components/ui/form";
import React from "react";
import { useFormContext } from "react-hook-form";

interface DropDownFieldProps {
  fieldName: string;
  required: boolean;
  languageName: string;
  fieldHeight: string;
  fieldWidth: string;
  labelTitle:string;
  additionalData: { label: string; value: string }[];
  requiredLabel?: boolean;
  placeHolder?: string;
  disabled?: boolean;
}

const DropDownDataField: React.FC<DropDownFieldProps> = ({
  fieldName,
  required,
  languageName,
  labelTitle,
  fieldHeight,
  fieldWidth,
  additionalData,
  placeHolder,
  requiredLabel = true,
  disabled = false,
}) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className={fieldWidth}>
          {requiredLabel && (
            <FormLabel className="font-light">
              {labelTitle}{" "}
              {required && <span className="ms-1 text-danger-500">*</span>}
            </FormLabel>
          )}
          <EmployeeInformationDrop
            disabled={disabled}
            placeHolder={placeHolder!}
            InputHi={fieldHeight}
            languageTitle={languageName}
            additionalData={additionalData || []}
            fieldName={fieldName}
            field={field}
          />
        </FormItem>
      )}
    />
  );
};

export default DropDownDataField;
