import { useBoolean } from "usehooks-ts";
import TableFrame from "../../components/common/TableFrame";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { PaginationClient } from "../../components/common/Pagination";
import { GET_ALL_TOPUPS } from "../../graphql/topUp";
import EmployeeModal from "../../components/common/Modal";
import { AddTopUpForm } from "../../components/topup/addTopUp";
import { DataTableDemo } from "../../components/topup/DataTable";

export const TopUp = () => {
  const { value, toggle } = useBoolean(false);
  const { data } = useQuery(GET_ALL_TOPUPS, {
    fetchPolicy: "network-only",
  });

  const memorizedData = useMemo(() => data?.driver_transactions || [], [data]);

  const [currentTableData, setCurrentTableData] = useState(memorizedData);

  const updateTableData = (paginatedData: unknown) => {
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
      {/* <DataTable
        className="with-action-column"
        columns={columns}
        loading={loading}
        data={currentTableData || []}
      /> */}
      <DataTableDemo data={currentTableData || []} />
      <div className="flex items-start mt-[30px]">
        <PaginationClient
          data={memorizedData || []}
          onPageChange={updateTableData}
          itemsPerPage={8} // Set initial data size to 8 items
        />
      </div>
      <EmployeeModal
        title={"Add Top"}
        modelRatio="w-[100svw] lg:w-[650px]"
        editMode={false}
        open={value}
        toggle={toggle}
        form={<AddTopUpForm editMode={false} toggle={toggle} />}
      />
    </div>
  );
};
