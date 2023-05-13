import React from "react";
import { useGetEvents } from "../../services/fetchers/event/event";

function CompanyDashboard() {
  const getAllMyEvents = useGetEvents();
  return (
    <div className="container">
      <div className="mt-5">
        <h2>Your Event Dashboard</h2>
        {getAllMyEvents.isLoading && (
          <h5 className="text-primary">Loading...</h5>
        )}
        {getAllMyEvents.isError && (
          <h5 className="text-danger">Something Went Wrong...</h5>
        )}
        {getAllMyEvents.isSuccess && getAllMyEvents.data[0]?.length == 0 && (
          <h5 className="">No data to preview...</h5>
        )}
        {getAllMyEvents.isSuccess &&
          getAllMyEvents.data?.length > 0 &&
          getAllMyEvents.data[0]?.map((unappEvent) => {
            return (
              <div
                className="card container m-2"
                style={{ background: "#FFFFFF", borderRadius: "10px" }}
              >
                <div className="card-body">
                  <h5>Event Name: {String(unappEvent?.title)}</h5>
                  <div>Event Type: {String(unappEvent?.type)}</div>
                  <div>Venue: {String(unappEvent?.venue)}</div>
                  <div>Event Created date: {String(unappEvent?.createdAt)}</div>
                  <div>Event Start date: {String(unappEvent?.startDate)}</div>
                  <div>Event End date: {String(unappEvent?.endDate)}</div>

                  <div className="">
                    <a
                      className="btn btn-danger text-white"
                      onClick={() => handleCallStatsOfEvent(unappEvent?.id)}
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CompanyDashboard;
