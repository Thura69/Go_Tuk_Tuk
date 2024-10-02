import { useBoolean } from "usehooks-ts";
import TableFrame from "../../components/common/TableFrame";
import { GET_ALL_BOOKS } from "../../graphql/booking";
import { useQuery } from "@apollo/client";
import { DataTable } from "../../components/tables/Data-table";
import { columns } from "../../components/bookings/column";
import { useMemo, useState } from "react";
import { PaginationClient } from "../../components/common/Pagination";

export const Book = () => {
  const { data, loading } = useQuery(GET_ALL_BOOKS, {
    fetchPolicy: "network-only",
  });

  const memorizedData = useMemo(() => data?.bookings || [], [data]);
  const {  toggle } = useBoolean(false);

  const [currentTableData, setCurrentTableData] = useState(memorizedData);

  const updateTableData = (paginatedData: any) => {
    setCurrentTableData(paginatedData);
  };

  return (
    <div className="p-[30px] min-h-[calc(100svh-81px)]  bg-gray-100">
      <TableFrame
        title="Booking History"
        modalTrue={() => {
          toggle();
        }}
        isWrite={false}
        subTitle={true}
      />
      <DataTable
        className="with-action-column"
        columns={columns}
        loading={loading}
        data={currentTableData || []}
      />
      <div className="flex items-start mt-[30px]">
        <PaginationClient
          data={memorizedData || []}
          onPageChange={updateTableData}
          itemsPerPage={8} // Set initial data size to 8 items
        />
      </div>
    </div>
  );
};
