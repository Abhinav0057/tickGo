import { useRef, useState } from "react";
import React from "react";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import { useGetAllMyUserTickets } from "../../services/fetchers/user/user";
import { useReactToPrint } from "react-to-print";
import { NewPdfPrint } from "./NewPdfPrint";
import defaultImage from "../../assets/image/ticketNew.png";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckCircle,
  faStickyNote,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function UserHomepage() {
  const userProfileData = useGetUserProfile();
  const userBookedTickets = useGetAllMyUserTickets();
  const [printTicketPayload, setPrintTicketPayload] = useState("");

  // for handling print ticket
  const componentRefNew = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRefNew.current,
  });

  const handlePrintTicket = (myTicket) => {
    setPrintTicketPayload(() => myTicket);
    handlePrint();
  };

  return (
    <div style={{ background: " rgba(0, 0, 0, 0.1)" }}>
      <div className="p-5">
        <h2>My Ticket History</h2>
        <div className="pt-4"></div>
        <h4> Hello {userProfileData?.data?.name} !</h4>
        <div>We’ve got all your ticket sorted.</div>

        <div className="pt-4"></div>
        <div className="container-fluid">
          {userBookedTickets?.isLoading && (
            <div className="text-center">
              Loading Tickets...
              <div className="mt-2">
                <Spinner
                  style={{ height: "100px", width: "100px", color: "red" }}
                  animation="border"
                />
              </div>
            </div>
          )}
          {userBookedTickets?.isError && (
            <div className="text-center text-danger">Something went wrong</div>
          )}
          {userBookedTickets?.isSuccess &&
            userBookedTickets?.data[0]?.length === 0 && (
              <div className="text-center text-danger">
                No Tickets to preview
              </div>
            )}
          <div className="">
            {userBookedTickets?.isSuccess &&
              userBookedTickets?.data[0]?.length > 0 &&
              userBookedTickets?.data[0]?.map((myTicket) => (
                <div className="m-2" key={myTicket.id}>
                  <div
                    style={{
                      backgroundColor: "rbga(0,0,111) !important",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  >
                    <div className="card-body" style={{}}>
                      <div className="row">
                        <div className="col-md-7 col-12">
                          <div
                            style={{
                              height: "200px",
                              width: "100%",
                            }}
                          >
                            <img
                              style={{
                                height: "200px",
                                width: "100%",
                                justifyContent: "cover",
                                borderRadius: "20px",
                              }}
                              src={myTicket?.name ?? defaultImage}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-5 col-12">
                          <h1 style={{ wordWrap: "break-word" }}>
                            {myTicket?.event?.title}
                          </h1>
                          <div
                            style={{
                              padding: "0px 0px ",
                              fontSize: "small",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCalendarDays}
                              className="mr-1 "
                              style={{ color: "red" }}
                            />
                            {myTicket?.event?.startDate
                              ? new Date(
                                  myTicket?.event?.startDate
                                ).toLocaleDateString()
                              : "x"}

                            <FontAwesomeIcon
                              icon={faClock}
                              className="mr-1 ml-1 "
                              style={{ color: "red" }}
                            />
                            {myTicket?.event?.startDate
                              ? new Date(
                                  myTicket?.event?.startDate
                                ).toLocaleTimeString()
                              : "x"}
                          </div>
                          <div className="pt-1">
                            <strong>
                              <FontAwesomeIcon
                                icon={faStickyNote}
                                className="mr-1 ml-1 "
                                style={{ color: "red" }}
                              />
                            </strong>{" "}
                            {myTicket?.type?.name}
                          </div>
                          <div className="pt-1">
                            <strong>
                              <FontAwesomeIcon
                                icon={faMoneyBill1}
                                className="mr-1 ml-1 "
                                style={{ color: "red" }}
                              />
                            </strong>{" "}
                            NPR. {myTicket?.type?.price}
                          </div>

                          {/* <div>
                            <strong>Ticket Id:</strong> {myTicket?.id}
                          </div> */}
                          <div className="pt-3">
                            <button
                              className="btn btn-danger "
                              onClick={() => handlePrintTicket(myTicket)}
                            >
                              Print Ticket
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {printTicketPayload?.id && (
        <div className="d-none  m-5 ">
          <NewPdfPrint
            style={{
              backgroundColor: "rgba(51, 177, 224, 0.25)",
              height: "100%",
            }}
            ref={componentRefNew}
            printTicketPayload={printTicketPayload}
          />
        </div>
      )}
    </div>
  );
}

export default UserHomepage;
