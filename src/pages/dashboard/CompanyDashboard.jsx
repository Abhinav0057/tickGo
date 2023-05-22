import React, { useEffect } from "react";
import { useState } from "react";
import { useGetEvents } from "../../services/fetchers/event/event";
import { useGetAllStats } from "../../services/fetchers/stats/stats";
import { useGetEventByIndex } from "../../services/fetchers/fetchSomething";
import { httpClient } from "../../services/http-helpers";
import { api } from "../../services/api";
import axios from "axios";
import TableCompanyTicketsBoughts from "./TableCompanyTicketsBoughts";
import { Spinner } from "react-bootstrap";
function CompanyDashboard() {
  const getAllMyEvents = useGetEvents();

  // const allEventStats = useGetAllStats();
  const [eventDetails, setEventDetails] = useState(null);
  const [eventDetailsStats, setEventDetailStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [callAgainHandler, setCallAgainHandler] = useState(false);

  const EventDetails = async (id) => {
    console.log(id);
    setEventDetails(() => id);
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const token1 = localStorage.getItem("token");
      const url =
        "http://3.110.32.78:3005/apiV1" +
        api.stats.statsById.replace("{id}", id);
      console.log(token, url);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // replace token with your actual token value
        },
      });
      setEventDetailStats(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }

    // try {
    //   const token = localStorage.getItem("token");
    //   const url =
    //     "http://localhost:5000/apiV1" +
    //     api.events.fetchByid.replace("{id}", id);
    //   console.log(token, url);
    //   const response = await axios.get(url, {
    //     headers: {
    //       Authorization: `Bearer ${token}`, // replace token with your actual token value
    //     },
    //   });
    //   setEventDetails(response.data);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    //   setIsError(true);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // useGetEventByIndex(id).then(({ data, isLoading, isError }) => {
  //   setIsLoading(isLoading);
  //   setIsError(isError);
  //   setEventDetails(data);
  // });
  useEffect(() => {
    if (callAgainHandler) {
      console.log("Called ");
      EventDetails(eventDetails);
      setCallAgainHandler(() => false);
    }
  }, [callAgainHandler]);

  return (
    <div className="p-2">
      <div className="mt-5">
        <h2>Your Event Dashboard</h2>
        {eventDetailsStats && (
          <div>
            <div className="text-left">
              <button
                className="btn btn-primary"
                onClick={() => setEventDetailStats("")}
              >
                Go Back
              </button>
            </div>
            <TableCompanyTicketsBoughts
              eventDetailsStats={eventDetailsStats}
              setCallAgainHandler={setCallAgainHandler}
            />
          </div>
        )}

        <div className="container">
          {getAllMyEvents.isLoading && (
            <>
              <h5 className="text-primary">Loading...</h5>
              <Spinner
                style={{ height: "100px", width: "100px", color: "red" }}
                animation="border"
              />
            </>
          )}
          {getAllMyEvents.isError && (
            <h5 className="text-danger">Something Went Wrong...</h5>
          )}
          {getAllMyEvents.isSuccess && getAllMyEvents?.data[0]?.length == 0 && (
            <h5 className="">No data to preview...</h5>
          )}
          <div>
            {!eventDetailsStats && (
              <>
                {getAllMyEvents?.isSuccess &&
                  getAllMyEvents?.data?.length > 0 &&
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
                          <div>
                            Event Created date: {String(unappEvent?.createdAt)}
                          </div>
                          <div>
                            Event Start date:{" "}
                            {new Date(
                              unappEvent?.startDate
                            ).toLocaleDateString()}{" "}
                            at{" "}
                            {new Date(
                              unappEvent?.startDate
                            ).toLocaleTimeString()}{" "}
                          </div>

                          <div>
                            Event End date:{" "}
                            {new Date(unappEvent?.endDate).toLocaleDateString()}{" "}
                            at{" "}
                            {new Date(unappEvent?.endDate).toLocaleTimeString()}{" "}
                          </div>

                          <div className="">
                            <a
                              className="btn btn-danger text-white"
                              onClick={() => EventDetails(unappEvent?.id)}
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
