import React from "react";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import { useGetAllMyUserTickets } from "../../services/fetchers/user/user";
function Userhomepage() {
  const userProfileData = useGetUserProfile();
  const userBookedTickets = useGetAllMyUserTickets();
  console.log(userBookedTickets);

  return (
    <div>
      <div className="m-3">
        <h6> My Ticket History</h6>
        <h3>Hello {userProfileData?.data?.name} !</h3>
        <div>We have sorted your ticket for you</div>
      </div>
      <div className=" mt-5 mb-5">
        {userBookedTickets?.isLoading && (
          <div className="text-center">Loading Tickets...</div>
        )}
        {userBookedTickets?.isError && (
          <div className="text-center text-danger">Something went wrong</div>
        )}
        {userBookedTickets?.isSuccess &&
          userBookedTickets?.data[0]?.length == 0 && (
            <div className="text-center text-danger">No Tickets to preview</div>
          )}
        <div>
          {userBookedTickets?.isSuccess &&
            userBookedTickets?.data[0]?.length > 0 &&
            userBookedTickets?.data[0]?.map((myTicket) => {
              console.log();
              return (
                <div className="m-2">
                  <div
                    style={{ border: "1px solid black", borderRadius: "12px" }}
                  >
                    <div className="p-2">
                      Event Name: {myTicket?.event?.title}
                    </div>
                    <div className="p-2">
                      Event Start Date:{" "}
                      {new Date(myTicket?.event?.startDate).toLocaleString(
                        "en-US",
                        { timeZone: "UTC", hour12: true }
                      )}
                    </div>
                    <div className="p-2">
                      Event End Date:{" "}
                      {new Date(myTicket?.event?.endDate).toLocaleString(
                        "en-US",
                        { timeZone: "UTC", hour12: true }
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Userhomepage;
