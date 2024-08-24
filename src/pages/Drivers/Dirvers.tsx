import { useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { columns } from "../../components/drivers/column";
import { DataTable } from "../../components/tables/Data-table";
import { GET_ALL_USERS } from "../../graphql/quires";
import { PaginationClient } from "../../components/common/Pagination";

export const Drivers = () => {
  const { data, loading } = useQuery(GET_ALL_USERS, {
    fetchPolicy: "network-only",
  });

  const memorizedData = useMemo(() => data?.users || [], [data]);

  const [currentTableData, setCurrentTableData] = useState([]);

  const updateTableData = (paginatedData: any) => {
    setCurrentTableData(paginatedData);
  };

  return (
    <div className="p-[30px] min-h-[calc(100svh-81px)]">
      <DataTable
        className={"with-action-column"}
        columns={columns}
        loading={loading}
        data={currentTableData || []}
      />
      <PaginationClient
        data={memorizedData || []}
        onPageChange={updateTableData}
        itemsPerPage={8} // Set initial data size to 8 items
      /> 
    </div>
  );
};
