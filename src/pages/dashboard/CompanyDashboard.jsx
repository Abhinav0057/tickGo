import React, { useEffect } from "react";
import { useState } from "react";
import { useGetEvents } from "../../services/fetchers/event/event";
import { useGetAllStats } from "../../services/fetchers/stats/stats";
import { useGetEventByIndex } from "../../services/fetchers/fetchSomething";
import { httpClient } from "../../services/http-helpers";
import { api } from "../../services/api";
import axios from "axios";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import TableCompanyTicketsBoughts from "./TableCompanyTicketsBoughts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import defaultImage from "../../assets/image/ticketNew.png";

import { Spinner } from "react-bootstrap";
function CompanyDashboard() {
  const getAllMyEvents = useGetEvents();

  // const allEventStats = useGetAllStats();
  const [eventDetails, setEventDetails] = useState(null);
  const [eventDetailsStats, setEventDetailStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [callAgainHandler, setCallAgainHandler] = useState(false);
  const userProfileData = useGetUserProfile();
  const EventDetails = async (id) => {
    console.log(id);
    setEventDetails(() => id);
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const token1 = localStorage.getItem("token");
      const url =
        "http://localhost:3005/apiV1" + api.stats.statsById.replace("{id}", id);
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
    //     "http://15.207.247.244:5000/apiV1" +
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

  useEffect(() => {
    if (callAgainHandler) {
      console.log("Called ");
      EventDetails(eventDetails);
      setCallAgainHandler(() => false);
    }
  }, [callAgainHandler]);

  return (
    <div style={{ background: " rgba(0, 0, 0, 0.1)" }}>
      <div className="">
        <div className="p-5">
          <h2>Your Event Dashboard</h2>
          <div className="pt-4"></div>
          <h4> Hello {userProfileData?.data?.name} !</h4>
          <div> All your events are here.</div>
          <div className="pt-4"></div>
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

          <div className="container-fluid">
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
            {getAllMyEvents.isSuccess &&
              getAllMyEvents?.data[0]?.length == 0 && (
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
                          className=" container-fluid "
                          style={{
                            backgroundColor: "rbga(0,0,111) !important",
                            borderRadius: "10px",
                            border: "none",
                          }}
                        >
                          <div className="card-body" style={{}}>
                            <>
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
                                      src={
                                        unappEvent?.images[0]?.name ??
                                        defaultImage
                                      }
                                    ></img>
                                  </div>
                                </div>
                                <div className="col-md-5 col-12">
                                  <h1 style={{ wordWrap: "break-word" }}>
                                    {" "}
                                    {String(unappEvent?.title)}
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
                                    {unappEvent?.startDate
                                      ? new Date(
                                          unappEvent?.startDate
                                        ).toLocaleDateString()
                                      : "x"}

                                    <FontAwesomeIcon
                                      icon={faClock}
                                      className="mr-1 ml-1 "
                                      style={{ color: "red" }}
                                    />
                                    {unappEvent?.startDate
                                      ? new Date(
                                          unappEvent?.startDate
                                        ).toLocaleTimeString()
                                      : "x"}
                                  </div>
                                  <div
                                    style={{
                                      padding: "4px 0px ",
                                      fontSize: "small",
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      className="mr-1 "
                                      style={{ color: "red" }}
                                    />
                                    {unappEvent?.endDate
                                      ? new Date(
                                          unappEvent?.endDate
                                        ).toLocaleDateString()
                                      : "x"}

                                    <FontAwesomeIcon
                                      icon={faClock}
                                      className="mr-1 ml-1 "
                                      style={{ color: "red" }}
                                    />
                                    {unappEvent?.endDate
                                      ? new Date(
                                          unappEvent?.endDate
                                        ).toLocaleTimeString()
                                      : "x"}
                                  </div>
                                  <div className="pt-2">
                                    <button
                                      className="btn btn-danger text-white"
                                      onClick={() =>
                                        EventDetails(unappEvent?.id)
                                      }
                                    >
                                      View More
                                    </button>
                                  </div>{" "}
                                </div>
                              </div>
                            </>
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
    </div>
  );
}

export default CompanyDashboard;
