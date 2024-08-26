import { ColumnDef } from "@tanstack/react-table";
import { cn, getRelativeTime } from "../../lib/utils";

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
    accessorKey: "start_location",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Start Location</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("start_location") as string;

      return (
        <div className="w-[250px]">
          <h3>{dateString}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "end_location",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>End Location</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("end_location") as string;

      return (
        <div className="w-[250px]">
          <h3>{dateString}</h3>
        </div>
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

      return (
        <div>
          <h3>{dateString}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "distance_fee_per_km",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Distance Fee Per KM</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("distance_fee_per_km") as string;

      return (
        <div>
          <h3>{dateString}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "extra_fee",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Extra Fee</h3>
        </section>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("extra_fee") as string;

      return (
        <div>
          <h3>{dateString}</h3>
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
    cell: ({ row }) => {
      const dateString = row.getValue("commission_fee") as string;

      return (
        <div>
          <h3>{dateString}</h3>
        </div>
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
    accessorKey: "waiting_fee",
    header: () => {
      return (
        <section className={cn("flex  justify-start  items-center gap-2")}>
          <h3>Waiting Fee</h3>
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
//   {
//     accessorKey: "action",
//     header: () => {
//       return (
//         <div className="h-full bg-zinc-50  flex items-center justify-center">
//           <p className="font-bold text-zinc-500 text-center">Action</p>
//         </div>
//       );
//     },
//     cell: ({ row }) => {
//       const [deleteData, setDeleteData] = useState<any>();
//       const [singleDriverData, setSingleDriverData] = useState<any>({
//         address: "",
//         balance: "",
//         birth_date: "",
//         created_at: "",
//         disabled: null,
//         driver_id: "",
//       });

//       const { value: dValue, toggle: dToggle } = useBoolean(false);
//       const { value, toggle } = useBoolean(false);

//       const handleEdit = (row: any) => {
//         const RowData = row.original;
//         setSingleDriverData(RowData);

//         toggle();
//       };

//       const handleDelete = async () => {
//         const id = deleteData.original?.id;

//         alert("service deleted");
//       };

//       return (
//         <div className={"flex justify-center "}>
//           <CellAction
//             language="section"
//             setSingleCodeGenerator={setDeleteData}
//             handleDelete={() => dToggle()}
//             handleEdit={handleEdit}
//             row={row}
//           />
//           <DeleteConfirm
//             message={"Do you want to delete Driver?"}
//             title={"Do you want to delete this record permanently?"}
//             isLoading={false}
//             toggle={dToggle}
//             open={dValue}
//             fun={handleDelete}
//           />
//           <EmployeeModal
//             title={"Edit Driver"}
//             modelRatio="w-[100svw] lg:w-[650px]"
//             editMode={true}
//             open={value}
//             toggle={toggle}
//             form={
//               <UserForm
//                 editMode
//                 editData={singleDriverData || []}
//                 toggle={toggle}
//               />
//             }
//           />
//         </div>
//       );
//     },
//   },
];
