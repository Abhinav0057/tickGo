import { useRef, useState } from "react";
import React from "react";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import { useGetAllMyUserTickets } from "../../services/fetchers/user/user";
import { useReactToPrint } from "react-to-print";
import { NewPdfPrint } from "./NewPdfPrint";
function Userhomepage() {
  const userProfileData = useGetUserProfile();
  const userBookedTickets = useGetAllMyUserTickets();
  console.log(userBookedTickets);
  const [printTicketPayload, setPrintTicketPayload] = useState("");

  // for handling print ticket
  const componentRefNew = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRefNew.current,
  });

  const handlePrintTicket = (myTicket) => {
    console.log(myTicket);
    setPrintTicketPayload(() => myTicket);
    handlePrint();
  };

  return (
    <>
      <div>
        <div className="m-3">
          <h6> My Ticket History</h6>
          <h3>Hello {userProfileData?.data?.name} !</h3>
          <div>We have sorted your ticket for you</div>
        </div>
        <div className=" mt-5 mb-5 container">
          {userBookedTickets?.isLoading && (
            <div className="text-center">Loading Tickets...</div>
          )}
          {userBookedTickets?.isError && (
            <div className="text-center text-danger">Something went wrong</div>
          )}
          {userBookedTickets?.isSuccess &&
            userBookedTickets?.data[0]?.length == 0 && (
              <div className="text-center text-danger">
                No Tickets to preview
              </div>
            )}
          <div className="">
            {userBookedTickets?.isSuccess &&
              userBookedTickets?.data[0]?.length > 0 &&
              userBookedTickets?.data[0]?.map((myTicket) => {
                return (
                  <div className="m-2">
                    <div
                      style={{
                        border: "1px solid black",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="p-2">
                        Event Name: {myTicket?.event?.title}
                        <div>
                          Event Start Date:{" "}
                          {new Date(myTicket?.event?.startDate).toLocaleString(
                            "en-US",
                            { timeZone: "UTC", hour12: true }
                          )}
                        </div>
                        Event End Date:{" "}
                        {new Date(myTicket?.event?.endDate).toLocaleString(
                          "en-US",
                          { timeZone: "UTC", hour12: true }
                        )}
                      </div>
                      <div className="p-2 pt-3">
                        Ticket Type:{myTicket?.type?.name}
                        <div>Ticket Price:NPR. {myTicket?.type?.price}</div>
                        <div>
                          Ticket Bought At :{" "}
                          {new Date(myTicket?.createdAt).toLocaleString(
                            "en-US",
                            {
                              timeZone: "UTC",
                              hour12: true,
                            }
                          )}
                        </div>
                        Ticket Id:{myTicket?.id}
                      </div>
                      <div className="p-2">
                        <div>
                          <button
                            className="btn btn-danger"
                            onClick={() => handlePrintTicket(myTicket)}
                          >
                            Print Ticket
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {printTicketPayload?.id && (
        <div className="d-none">
          <NewPdfPrint
            ref={componentRefNew}
            printTicketPayload={printTicketPayload}
          ></NewPdfPrint>
        </div>
      )}
    </>
  );
}

export default Userhomepage;
