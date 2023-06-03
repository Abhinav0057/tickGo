import React from "react";
import { useGetApprovedEvents } from "../../services/fetchers/event/event";
import { useToogleEventApproval } from "../../services/fetchers/event/event";
import { Spinner } from "react-bootstrap";
import defaultImage from "../../assets/image/ticketNew.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function ApprovedEventsList() {
  const unApprovedEvents = useGetApprovedEvents();
  const { mutateAsync, error, mutate } = useToogleEventApproval();

  const handleApproveEventHandler = async (id) => {
    const returnData = await mutateAsync(id);
  };
  return (
    <div style={{ background: " rgba(0, 0, 0, 0.1)" }}>
      <div className="p-5">
        <h2> Event Control Panel</h2>
        <div className="pt-4"></div>
        <h4> Hello Superadmin !</h4>
        <div> We have events that you have approved</div>
        <div className="pt-4"></div>
        {unApprovedEvents.isLoading && (
          <>
            {" "}
            <h5 className="text-primary">Loading...</h5>
            <Spinner
              className="mt-2"
              style={{ height: "100px", width: "100px", color: "red" }}
              animation="border"
            />
          </>
        )}
        {unApprovedEvents.isError && (
          <h5 className="text-danger">Something Went Wrong...</h5>
        )}
        {unApprovedEvents.isSuccess &&
          unApprovedEvents.data[0]?.length == 0 && (
            <h5 className="">No data to preview...</h5>
          )}
        {/* {unApprovedEvents.isSuccess &&
          unApprovedEvents.data[0]?.length > 0 &&
          unApprovedEvents.data[0]?.map((unappEvent) => {
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
                    <div className="text-danger">Event Not Published Yet</div>
                  )}
                  <div className="">
                    <a
                      className="btn btn-danger text-white"
                      onClick={() => {
                        handleApproveEventHandler(unappEvent.id);
                      }}
                    >
                      Unapprove Event
                    </a>
                  </div>
                </div>
              </div>
            );
          })} */}

        {unApprovedEvents.isSuccess &&
          unApprovedEvents.data[0]?.length > 0 &&
          unApprovedEvents.data[0]?.map((unappEvent) => {
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
                            height: "250px",
                            width: "100%",
                          }}
                        >
                          <img
                            style={{
                              height: "250px",
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
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="mr-1 "
                            style={{ color: "red" }}
                          />
                          {unappEvent?.endDate
                            ? new Date(unappEvent?.endDate).toLocaleDateString()
                            : "x"}
                          <div
                            style={{ padding: "0px 0px ", fontSize: "small" }}
                          >
                            <FontAwesomeIcon
                              icon={faClock}
                              className="mr-1 "
                              style={{ color: "red" }}
                            />
                            {unappEvent?.endDate
                              ? new Date(
                                  unappEvent?.endDate
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
                        <div className="pt-2">
                          <a
                            className="btn btn-danger text-white"
                            onClick={() => {
                              handleApproveEventHandler(unappEvent.id);
                            }}
                          >
                            Unapprove Event
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
