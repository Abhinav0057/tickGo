import React from "react";
import ReactTable from "../../UI/ReactTable";
import { useCheckInTicketHandler } from "../../services/fetchers/event/event";

function TableCompanyTicketsBoughts(props) {
  const { mutateAsync, error, mutate } = useCheckInTicketHandler();

  const handleCkecinHandler = async (ticket) => {
    console.log(ticket);
    const returnData = await mutateAsync(ticket.id);
    console.log(returnData);
    props.setCallAgainHandler(() => true);
  };
  const dataTableTemp = [];
  props.eventDetailsStats &&
    props.eventDetailsStats.length > 0 &&
    props.eventDetailsStats.forEach((ticketBought, i) => {
      const tempDict = {};

      const tempActions = (
        <div>
          <span>
            {ticketBought.checkedIn && (
              <span className="badge badge-light-success">Checked in</span>
            )}
            {!ticketBought.checkedIn && (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  handleCkecinHandler(ticketBought);
                }}
              >
                Check in
              </button>
            )}
          </span>
        </div>
      );

      tempDict.sn = i;
      tempDict.customerName = ticketBought?.boughtBy?.name ?? "-";

      tempDict.customerPhone = ticketBought?.boughtBy?.phone ?? "-";
      tempDict.customerEmail = ticketBought?.boughtBy?.auth?.email ?? "-";
      tempDict.ticketType = ticketBought?.type?.name ?? "-";
      tempDict.ticketTypePrice = ticketBought?.type?.price ?? "-";
      tempDict.ticketId = ticketBought?.id ?? "-";

      tempDict.action = tempActions;
      dataTableTemp.push(tempDict);
    });

  const data = React.useMemo(
    () => [...dataTableTemp],
    [props.eventDetailsStats]
  );
  const columnsTable = React.useMemo(
    () => [
      { Header: "S.N", accessor: "sn" },
      { Header: "id", accessor: "ticketId" },
      { Header: "Name", accessor: "customerName" },
      { Header: "Phone", accessor: "customerPhone" },
      { Header: "Email", accessor: "customerEmail" },
      { Header: "Ticket", accessor: "ticketType" },
      { Header: "Price", accessor: "ticketTypePrice" },
      { Header: "Action", accessor: "action" },
    ],
    [data]
  );

  return (
    <div>
      {props.eventDetailsStats?.length > 0 && (
        <ReactTable data={data} columns={columnsTable}></ReactTable>
      )}
      {props.eventDetailsStats?.length == 0 && (
        <div className="text-center text-danger">No data to preview</div>
      )}
    </div>
  );
}

export default TableCompanyTicketsBoughts;
