import { ColumnDef } from "@tanstack/react-table";
import { cn, getRelativeTime } from "../../lib/utils";
import ActiveBadge from "../common/ActiveBadge";
import InactiveBadge from "../common/InactiveBadge";
import CellAction from "../common/CellAction";
import { useBoolean } from "usehooks-ts";
import { useState } from "react";
import EmployeeModal from "../common/Modal";
import { ExtraFeesForm } from "./extra-fees-form";
import { DeleteConfirm } from "../common/DeleteConfirmation";
import { useMutation } from "@apollo/client";
import {
  DELETE_EXTRAFEES_BY_ID,
  GETALL_EXTRAFEES,
} from "../../graphql/extraFee";

export type ExtraFeesType = {
  __typename: string;
  updated_at: string;
  name: string;
  id: string;
  disabled: boolean;
  created_at: string;
  amount: number;
};

export const columns: ColumnDef<ExtraFeesType>[] = [
  {
    id: "id",
  },
  {
    accessorKey: "name",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Name</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Amount</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({}) => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Created Time</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("created_at") as string;

      const relativeTime = getRelativeTime(dateString);

      return (
        <div className="">
          <h3>{relativeTime}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "disabled",
    header: ({}) => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Disabled</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("disabled") as string;
      return (
        <div className="">
          {status ? (
            <ActiveBadge type="verified" />
          ) : (
            <InactiveBadge type="verified" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => {
      return (
        <div className="h-full bg-zinc-50  flex items-center justify-center">
          <p className="font-bold text-zinc-500 text-center">Action</p>
        </div>
      );
    },
    cell: ({ row }) => {
      const [deleteData, setDeleteData] = useState<any>();
      const [deleteService, { loading }] = useMutation(DELETE_EXTRAFEES_BY_ID, {
        refetchQueries: [GETALL_EXTRAFEES],
      });
      const [singleDriverData, setSingleDriverData] = useState<any>({
        address: "",
        balance: "",
        birth_date: "",
        created_at: "",
        disabled: null,
        driver_id: "",
      });

      const { value: dValue, toggle: dToggle } = useBoolean(false);
      const { value, toggle } = useBoolean(false);

      const handleDelete = async () => {
        const id = deleteData.original?.id;

        await deleteService({
          variables: {
            id: id,
          },
        });
        dToggle();
      };

      const handleEdit = (row: any) => {
        const RowData = row.original;
        setSingleDriverData(RowData);

        toggle();
      };

      return (
        <div className={"flex justify-center "}>
          <CellAction
            language="section"
            isDelete={true}
            isEdit={false}
            isDetails
            setSingleCodeGenerator={setDeleteData}
            handleDelete={() => dToggle()}
            handleEdit={handleEdit}
            row={row}
          />
          <DeleteConfirm
            message={"Do you want to delete Extra Fees?"}
            title={"Do you want to delete this record permanently?"}
            isLoading={loading}
            toggle={dToggle}
            open={dValue}
            fun={handleDelete}
          />
          <EmployeeModal
            title={"Extra Fees Detail"}
            modelRatio="w-[100svw] lg:w-[650px]"
            editMode={true}
            open={value}
            toggle={toggle}
            form={
              <ExtraFeesForm
                editMode
                editData={singleDriverData || []}
                toggle={toggle}
              />
            }
          />
        </div>
      );
    },
  },
];
