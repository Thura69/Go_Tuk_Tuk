import { ColumnDef } from "@tanstack/react-table";
import { cn, getRelativeTime } from "../../lib/utils";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import CellAction from "../common/CellAction";
import EmployeeModal from "../common/Modal";
import { ExtraFeesForm } from "../extrafees/extra-fees-form";
import { useNavigate } from "react-router-dom";

export type Trips = {
  __typename: "trips";
  commission_fee: 120;
  commission_rate: 3;
  commission_rate_type: "percentage";
  created_at: "2024-08-26T09:02:13.651806+00:00";
  distance_fee: 0;
  distance_fee_per_km: 800;
  distance_km: 0;
  total_amount: 4200;
  start_location: "Q4QG+W2R, 28 Set Twin Street, Yangon, Myanmar (Burma)";
  end_location: "Q4QG+W2R, 28 Set Twin Street, Yangon, Myanmar (Burma)";
  driver_id: "4e5331a3-30c4-491f-a36f-e4f40f6cdc71";
  extra_fee: 1000;
  location_points: '[{"latitude":16.7902737,"longitude":96.1249172}]';
  waiting_fee: 0;
};

export const columns: ColumnDef<Trips>[] = [
  {
    id: "id",
  },
  {
    accessorKey: "trip_id",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Trip ID</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "distance_km",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Distance KM</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "total_amount",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Total Amount</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("total_amount") as string;
      const fullNumber = Math.round(Number(dateString));

      return (
        <div className="">
          <h3>{fullNumber}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "commission_fee",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Comission Fee</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "driver_received_amount",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Driver Received Amount</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Status</h3>
        </section>
      );
    },
  },
  {
    accessorKey: "commission_rate",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Comission Fee</h3>
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
    accessorKey: "action",
    header: () => {
      return (
        <div className="h-full bg-zinc-50  flex items-center justify-center">
          <p className="font-bold text-zinc-500 text-center">Action</p>
        </div>
      );
    },
    cell: ({ row }) => {
      const [setDeleteData] = useState<any>();
      const navigate = useNavigate();

      const [singleDriverData] = useState<any>({
        address: "",
        balance: "",
        birth_date: "",
        created_at: "",
        disabled: null,
        driver_id: "",
      });

      const { toggle: dToggle } = useBoolean(false);
      const { value, toggle } = useBoolean(false);

      const handleEdit = (row: any) => {
        const RowData = row.original;

        navigate(`/trip-history/details/${RowData.id}`);

        toggle();
      };

      return (
        <div className={"flex justify-center "}>
          <CellAction
            language="section"
            isDelete={false}
            isEdit={false}
            isDetails
            setSingleCodeGenerator={setDeleteData}
            handleDelete={() => dToggle()}
            handleEdit={handleEdit}
            row={row}
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
