import { ColumnDef } from "@tanstack/react-table";
import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import CellAction from "../common/CellAction";
import { DeleteConfirm } from "../common/DeleteConfirmation";
import EmployeeModal from "../common/Modal";
import { UserForm } from "../drivers/user-form";

type Booking = {
  __typename: string;
  customer: {
    __typename: string;
    name: string;
    phone: string;
    profile_picture_url: string;
  };
  driver: {
    __typename: string;
    name: string;
    phone: string;
    profile_picture_url: string;
    vehicle_number: string;
  } | null;
  trip: {
    __typename: string;
    total_amount: number;
    status: string;
  } | null;
  start_location: string;
  end_location: string;
};

export const columns: ColumnDef<Booking>[] = [
  {
    id: "id",
  },
  {
    accessorKey: "customer.name",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Customer Name</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "customer.phone",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Customer Phone</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "customer.profile_picture_url",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Customer Photo</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const PICURL = row.original.customer.profile_picture_url as string;
      return (
        <div className="">
          {PICURL ? (
            <Avatar>
              <AvatarImage src={PICURL} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src={PICURL} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "driver.name",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Driver Name</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "driver.phone",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Driver Phone</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "driver.profile_picture_url",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Driver Photo</h3>
        </section>
      );
    },
    cell: ({ row }) => {

      const PICURL = row.original.driver?.profile_picture_url as string;
      return (
        <div className="">
          {PICURL ? (
            <Avatar>
              <AvatarImage src={PICURL} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src={PICURL} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "driver.vehicle_number",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Vehicle Number</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "trip.total_amount",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Total Amount</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "trip.status",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Total Amount</h3>
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
      const [_, setDeleteData] = useState<any>();
      //   const [deleteService] = useMutation(DELETE_DRIVER_BY_ID, {
      //     refetchQueries: [],
      //   });
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

      const handleEdit = (row: any) => {
        const RowData = row.original;
        setSingleDriverData(RowData);

        toggle();
      };

      const handleDelete = async () => {
        // const id = deleteData.original?.id;

        // await deleteService({
        //   variables: {
        //     id: id,
        //   },
        // });
        alert("service deleted");
      };

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
            message={"Do you want to delete Booking?"}
            title={"Do you want to delete this record permanently?"}
            isLoading={false}
            toggle={dToggle}
            open={dValue}
            fun={handleDelete}
          />
          <EmployeeModal
            title={"Edit Driver"}
            modelRatio="w-[100svw] lg:w-[650px]"
            editMode={true}
            open={value}
            toggle={toggle}
            form={
              <UserForm
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
