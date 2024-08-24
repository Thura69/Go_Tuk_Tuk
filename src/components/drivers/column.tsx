import { ColumnDef } from "@tanstack/react-table";
import InactiveBadge from "../common/InactiveBadge";
import { useBoolean } from "usehooks-ts";
import { cn } from "../../lib/utils";
import ActiveBadge from "../common/ActiveBadge";
import { useState } from "react";
import CellAction from "../common/CellAction";
import { DeleteConfirm } from "../common/DeleteConfirmation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type Section = {
  Department_Name: string;
  section_name: string;
  description: string;
  status: boolean;
  Total_Employees: number;
};

export const columns: ColumnDef<Section>[] = [
  {
    id: "select",
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
    accessorKey: "profile_picture_url",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Profile Picture</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const pic = row.getValue("profile_picture_url") as string;

      return (
        <>
          {status ? (
            <Avatar>
            <AvatarImage src={pic} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src={pic} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </>
      );
    },
  },
  {
    accessorKey: "phone",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Phone</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "disabled",
    header: ({ }) => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Status</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className="">{status ? <ActiveBadge /> : <InactiveBadge />}</div>
      );
    },
  },
  {
    accessorKey: "profile_verified",
    header: ({  }) => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Verified</h3>
        </section>
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
      const [, setDeleteData] = useState<any>();

      const {
        value: dValue,
        toggle: dToggle,
      } = useBoolean(false);


      const handleEdit = () => {
      
      };

      const handleDelete = () => {};

      return (
        <div className={"flex justify-center "}>
          <CellAction
            language="section"
            setSingleCodeGenerator={setDeleteData}
            handleDelete={() => dToggle()}
            handleEdit={handleEdit}
            row={row}
          />
          <DeleteConfirm
            message={"Do you want to delete dirver?"}
            title={"Do you want to delete this record permanently?"}
            isLoading={false}
            toggle={dToggle}
            open={dValue}
            fun={handleDelete}
          />
        </div>
      );
    },
  },
];
