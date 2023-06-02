import React from "react";
import { useGetEvents } from "../../services/fetchers/event/event";
import { useGetUnpublishedEvents } from "../../services/fetchers/event/event";
import { useTooglePublishHandler } from "../../services/fetchers/event/event";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import defaultImage from "../../assets/image/ticketNew.png";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default function UnapprovedEventsList() {
  const getAllMyEvents = useGetEvents();
  const userProfileData = useGetUserProfile();
  const getAllMyEventsUnpublised = useGetUnpublishedEvents();
  const { mutateAsync, error, mutate } = useTooglePublishHandler();

  const handlePublishEventHandler = async (id) => {
    const returnData = await mutateAsync(id);
  };
  return (
    <div style={{ background: " rgba(0, 0, 0, 0.1)" }}>
      <div className="">
        <div className="p-5">
          <h2> Event Control Panel</h2>
          <div className="pt-4"></div>
          <h4> Hello {userProfileData?.data?.name} !</h4>
          <div> We have your events sorted for you</div>
          <div className="pt-4"></div>

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
          {getAllMyEvents.isSuccess && getAllMyEvents.data[0]?.length == 0 && (
            <h5 className="">No data to preview...</h5>
          )}

          {getAllMyEvents.isSuccess && getAllMyEvents.data?.length > 0 && (
            <h5 className="text-danger p-2">Published Events</h5>
          )}

          {/* {getAllMyEvents.isSuccess &&
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
                    <div>Venue: {String(unappEvent?.venue?.name)}</div>
                    <div>
                      Event Created date: {String(unappEvent?.createdAt)}
                    </div>
                    <div>
                      Event Start date:{" "}
                      {new Date(unappEvent?.startDate).toLocaleDateString()} at{" "}
                      {new Date(unappEvent?.startDate).toLocaleTimeString()}{" "}
                    </div>

                    <div>
                      Event End date:{" "}
                      {new Date(unappEvent?.endDate).toLocaleDateString()} at{" "}
                      {new Date(unappEvent?.endDate).toLocaleTimeString()}{" "}
                    </div>
                    {!unappEvent?.isPublished && (
                      <div className="text-success">Event Publised</div>
                    )}
                    <div className="">
                      <a
                        disabled="true"
                        className="btn btn-danger text-white"
                        onClick={() => {
                          handlePublishEventHandler(unappEvent.id);
                        }}
                      >
                        Unpublish Event
                      </a>
                    </div>
                  </div>
                </div>
              );
            })} */}
          {getAllMyEvents.isSuccess &&
            getAllMyEvents.data?.length > 0 &&
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
                              src={unappEvent?.images[0]?.name ?? defaultImage}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-5 col-12">
                          <h1 style={{ wordWrap: "break-word" }}>
                            {" "}
                            {String(unappEvent?.title)}
                          </h1>

                          <div>
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
                            <div
                              style={{ padding: "0px 0px ", fontSize: "small" }}
                            >
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-1 "
                                style={{ color: "red" }}
                              />
                              {unappEvent?.startDate
                                ? new Date(
                                    unappEvent?.startDate
                                  ).toLocaleTimeString()
                                : "x"}
                            </div>
                          </div>
                          <div className="pt-2">
                            <a
                              disabled="true"
                              className="text-success"
                              // onClick={() => {
                              //   handlePublishEventHandler(unappEvent.id);
                              // }}
                            >
                              Event Published{" "}
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="mr-1 "
                                style={{ color: "green" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              );
            })}
          {getAllMyEvents?.data?.length > 0 && getAllMyEvents.data[1] === 0 && (
            <h4 className="text-center text-danger">No data to preview </h4>
          )}
          {getAllMyEventsUnpublised?.data?.length > 0 && (
            <h5 className="text-danger p-2">Unpublished Events</h5>
          )}

          {/* {getAllMyEventsUnpublised?.data?.length > 0 &&
            getAllMyEventsUnpublised.data[0]?.map((unappEvent) => {
              return (
                <div
                  className="card container m-2"
                  style={{ background: "#FFFFFF", borderRadius: "10px" }}
                >
                  <div className="card-body">
                    <h5>Event Name1: {String(unappEvent?.title)}</h5>
                    <div>Event Type: {String(unappEvent?.type)}</div>
                    <div>Venue: {String(unappEvent?.venue?.name)}</div>

                    <div>
                      Event Start date:{" "}
                      {new Date(unappEvent?.startDate).toLocaleDateString()} at{" "}
                      {new Date(unappEvent?.startDate).toLocaleTimeString()}{" "}
                    </div>

                    <div>
                      Event End date:{" "}
                      {new Date(unappEvent?.endDate).toLocaleDateString()} at{" "}
                      {new Date(unappEvent?.endDate).toLocaleTimeString()}{" "}
                    </div>
                    {!unappEvent?.isPublished && (
                      <div className="text-danger">Event Not Published</div>
                    )}
                    <div className="">
                      <a
                        className="btn btn-danger text-white"
                        onClick={() => {
                          handlePublishEventHandler(unappEvent.id);
                        }}
                      >
                        Publish Event
                      </a>
                    </div>
                  </div>
                </div>
              );
            })} */}
          {getAllMyEventsUnpublised?.data?.length > 0 &&
            getAllMyEventsUnpublised.data[0]?.map((unappEvent) => {
              return (
                <div
                  className=" container-fluid "
                  style={{
                    backgroundColor: "rbga(0,0,111) !important",
                    borderRadius: "10px",
                    border: "none",
                  }}
                >
                  <div
                    className="card-body"
                    style={{ backgroundColor: "rgba(0,0,0.0.1) " }}
                  >
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
                              src={unappEvent?.images[0]?.name ?? defaultImage}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-5 col-12">
                          <h1 style={{ wordWrap: "break-word" }}>
                            {" "}
                            {String(unappEvent?.title)}
                          </h1>

                          <div>
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
                            <div
                              style={{ padding: "0px 0px ", fontSize: "small" }}
                            >
                              <FontAwesomeIcon
                                icon={faClock}
                                className="mr-1 "
                                style={{ color: "red" }}
                              />
                              {unappEvent?.startDate
                                ? new Date(
                                    unappEvent?.startDate
                                  ).toLocaleTimeString()
                                : "x"}
                            </div>
                          </div>
                          <div className="pt-2">
                            <a
                              className="btn btn-danger text-white"
                              onClick={() => {
                                handlePublishEventHandler(unappEvent.id);
                              }}
                            >
                              Publish Event
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              );
            })}
          {getAllMyEventsUnpublised?.data?.length > 0 &&
            getAllMyEventsUnpublised.data[1] === 0 && (
              <h4 className="text-center text-danger">No data to preview </h4>
            )}
        </div>
      </div>
    </div>
  );
}
