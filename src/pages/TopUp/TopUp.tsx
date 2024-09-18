import { useBoolean } from "usehooks-ts";
import TableFrame from "../../components/common/TableFrame";
import { DataTable } from "../../components/tables/Data-table";
import { columns } from "../../components/topup/columns";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { PaginationClient } from "../../components/common/Pagination";
import { GET_ALL_TOPUPS } from "../../graphql/topUp";

export const TopUp = () => {
  const { toggle } = useBoolean(false);
  const { data, loading } = useQuery(GET_ALL_TOPUPS, {
    fetchPolicy: "network-only",
  });


  const memorizedData = useMemo(() => data?.driver_transactions || [], [data]);
  const [currentTableData, setCurrentTableData] = useState(memorizedData);


  const updateTableData = (paginatedData: any) => {
    setCurrentTableData(paginatedData);
  };

  return (
    <div className="p-[30px] min-h-[calc(100svh-81px)]  bg-gray-100">
      <TableFrame
        title="Top Up"
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
