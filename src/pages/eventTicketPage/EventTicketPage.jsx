import React from "react";
import braynAdamImage from "../../assets/image/bryan 2.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEventTickets } from "./useEventTickets";

function EventTicketPage(props) {
  const eventTickets = useEventTickets({
    allTicketsData: props.myEventData?.ticketTypes,
  });
  console.log(eventTickets.currnetSelectedTicketsToBuy);
  return (
    <div className="container">
      <div className="section  pt-3 pb-3"></div>
      <div className="section pt-5">
        <div className="row pt-5">
          <h4 className="text-center pb-1 "> Ticket Types</h4>
          <div className="row">
            {eventTickets?.currnetSelectedTicketsToBuy?.map((data, i) => (
              <div className="col-md-6 col-12   pt-5 pb-5">
                <div
                  style={{
                    width: "100%",
                    // display: "flex",
                    // justifyContent: "center",
                  }}
                >
                  <div style={{ width: "300px" }}>
                    <div
                      style={{
                        background: "#FFFFFF",
                        boxShadow: "2px 2px 4px 10px rgba(0, 0, 0, 0.07)",
                        borderRadius: "20px",
                        padding: "10px",
                      }}
                    >
                      <div className="pt-2 text-center pb-2">
                        <div
                          className="text-bold"
                          style={{ fontWeight: "800" }}
                        >
                          {data?.name}
                        </div>
                      </div>
                      <div
                        className="header"
                        style={{ wordWrap: "break-word" }}
                      >
                        {data?.description}
                      </div>
                      <div
                        className="header text-danger"
                        style={{ wordWrap: "break-word" }}
                      >
                        Total Remaning Ticket: {data?.count}
                      </div>
                      <div className="pt-2 text-center pb-2">
                        <div
                          className="text-bold"
                          style={{ fontWeight: "600" }}
                        >
                          Rs {data?.price} per
                        </div>
                      </div>
                      <div className="pt-2 text-center pb-2">
                        <span
                          style={{
                            backgroundColor: "red",
                            padding: "6px 10px",
                            borderRadius: "4px",
                            color: "white",
                          }}
                        >
                          <a
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              padding: "0px 4px",
                            }}
                            onClick={() => {
                              eventTickets.decreaseTicketCountHandler(data?.id);
                            }}
                          >
                            -
                          </a>
                          <span
                            style={{
                              padding: "0px 4px",
                            }}
                          >
                            {data?.currentSelectedValue}
                          </span>
                          <a
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              padding: "0px 4px",
                              
                            }}
                            onClick={() => {
                              eventTickets.increaseTicketCountHandler(data?.id);
                            }}
                          >
                            +
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-right m-4">
          <Link
            to={`/checkout/${props.myEventData.id}/${props.myEventData.title}`}
            state={{
              myEventData: props.myEventData,
              currnetSelectedTicketsToBuy:
                eventTickets.currnetSelectedTicketsToBuy,
            }}
          >
            <button
              disabled={eventTickets.totalNumberOfTicketSelected == "0"}
              className="btn btn-danger "
              style={{ padding: "10px 14px" }}
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventTicketPage;
