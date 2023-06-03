import { useMemo, React } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { ColumnFilter } from "./ColumnFilter";
import { GlobalFilter } from "./GlobalFilter";
import Pagination from "react-bootstrap/Pagination";

const ReactTable = ({ columns, data }) => {
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageSize: 20 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div style={{ height: "83vh", position: "relative" }}>
        <div style={{ height: "70vh", overflow: "auto" }}>
          <div className="d-flex justify-content-left alighn-items-center mb-1">
            <h6 className="m-2">Search By:</h6>
            <GlobalFilter
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              className="w-50 p-1 m-0"
            />
          </div>
          <div style={{}} className="">
            <table
              {...getTableProps()}
              className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4"
              style={{ overflowX: "auto", height: "100px" }}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    style={{
                      color: "black",
                      position: "sticky",
                      top: "0",
                      cursor: "pointer",
                      boxShadow:
                        "0px 2px rgba(51, 177, 224, 0.25), 0px 0px rgba(30, 39, 51, 0.05)",
                      backgroundColor: "white",
                      zIndex: "2",
                      padding: "10px 0px",
                    }}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="p-0 m-0 min-w-100px fs-5 fw-bold"
                        style={{
                          color: "black",
                          pointer: "cursor",
                        }}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className=""
                      style={{
                        color: "black",
                      }}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            color: "black",
                          }}
                        >
                          {cell.render("Cell")}{" "}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className=" justify-content-center p-0 m-0  "
          style={{ border: "none" }}
        >
          <Pagination className="mt-3">
            <Pagination.First
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="page-link p-0 m-0"
            ></Pagination.First>
            <Pagination.Prev
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="page-link p-0 m-0"
            ></Pagination.Prev>
            <Pagination.Next
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="page-link p-0 m-0"
            ></Pagination.Next>
            <Pagination.Last
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="page-link p-0 m-0"
            ></Pagination.Last>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ReactTable;
