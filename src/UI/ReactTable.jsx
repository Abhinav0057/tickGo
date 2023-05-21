import { useMemo, React } from "react";
// import {COLUMNS} from '../column'
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
  // default column component

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
          <div className="d-flex justify-content-left alighn-items-center  mb-1">
            <h6 className="m-2">Search By:</h6>
            <GlobalFilter
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              className="w-50 p-1 m-0"
            />
            {/* apply the table props */}
          </div>
          <div style={{}} className="">
            <table
              {...getTableProps()}
              className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4"
              style={{ overflowX: "auto", height: "100px" }}
            >
              <thead>
                {
                  // Loop over the header rows
                  headerGroups.map((headerGroup) => (
                    // Apply the header row props
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      style={{
                        color: "black",
                        ":hover": { color: "none !important" },
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
                      {
                        // Loop over the headers in each row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            className="p-0 m-0 min-w-100px fs-5 fw-bold "
                            style={{
                              color: "black",
                              ":hover": { color: "none !important" },
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
                            <div className="p-0 min-w-100px ">
                              {/* {column.canFilter ? column.render('Filter') : null} */}
                            </div>
                          </th>
                        ))
                      }
                    </tr>
                  ))
                }
              </thead>
              {/* Apply the table body props */}
              <tbody {...getTableBodyProps()}>
                {
                  // Loop over the table rows
                  page.map((row, i) => {
                    // Prepare the row for display
                    prepareRow(row);

                    return (
                      <tr
                        {...row.getRowProps()}
                        className=""
                        style={{
                          color: "black",
                          ":hover": { color: "none !important" },
                        }}
                      >
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => {
                            // Apply the cell props

                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  color: "black",
                                  ":hover": { color: "none !important" },
                                }}
                              >
                                {cell.render("Cell")}{" "}
                              </td>
                            );
                          })
                        }
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div
          className=""
          style={{ position: "absolute", bottom: "0", width: "100%" }}
        >
          <Pagination>
            <div
              className="pagination fs-6 fw-bold text-700 "
              style={{ marginTop: "1rem" }}
            >
              <Pagination.First
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                // style={{
                //   background: '#F3F6F9',
                //   borderRadius: '2px',
                //   border: 'none',
                // }}
                // className='page-item previous'
                className="btn btn-icon btn-sm btn-light mr-2 my-1 mx-2"
              >
                {/* {'<<'} */}
                {/* </button>{' '} */}
              </Pagination.First>
              <Pagination.Prev
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                // className='page-item'
                // style={{
                //   background: '#F3F6F9',
                //   borderRadius: '2px',
                //   border: 'none',
                // }}
                className="btn btn-icon btn-sm btn-light mr-2 my-1 mx-2"
              ></Pagination.Prev>
              <Pagination.Next
                onClick={() => nextPage()}
                disabled={!canNextPage}
                // className='page-item'
                // style={{
                //   background: '#F3F6F9',
                //   borderRadius: '2px',
                //   border: 'none',
                // }}
                className="btn btn-icon btn-sm btn-light mr-2 my-1 mx-2"
              ></Pagination.Next>
              <Pagination.Last
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                // className='page-item'
                // style={{
                //   background: '#F3F6F9',
                //   borderRadius: '2px',
                //   border: 'none',
                // }}
                className="btn btn-icon btn-sm btn-light mr-2 my-1 mx-2"
              ></Pagination.Last>
              <span className=" d-lfex align-items-center m-1 py-3 mx-2">
                Page{" "}
                <strong className="mx-2">
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              {/* <span className="d-flex align-items-center py-3">
                | Go to page:{" "}
                <input
                  type="number"
                  className="text-center  m-1"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  style={{
                    maxWidth: "50px",
                    border: "solid 1px",
                    borderRadius: "4px",
                  }}
                />
              </span>{" "} */}
              <select
                className="btn  btn-light px-2 border-0 mx-2"
                style={{ borderRadius: "4px", width: "130px" }}
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize} className="m-0 p-0">
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ReactTable;
