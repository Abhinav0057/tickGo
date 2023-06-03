import React from "react";
import { useGetUnapprovedEvents } from "../../services/fetchers/event/event";
import { useToogleEventApproval } from "../../services/fetchers/event/event";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckCircle,
  faCircleDot,
} from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import defaultImage from "../../assets/image/ticketNew.png";

export default function UnapprovedEventsList() {
  const unApprovedEvents = useGetUnapprovedEvents();
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
        <div> We have events that you need to approve</div>
        <div className="pt-4"></div>
        {unApprovedEvents.isLoading && (
          <>
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
                            className="text-danger"
                            // onClick={() => {
                            //   handlePublishEventHandler(unappEvent.id);
                            // }}
                          >
                            Event Unpublished{" "}
                            <FontAwesomeIcon
                              icon={faCircleDot}
                              className="mr-1 "
                              style={{ color: "red" }}
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
                            Approve Event
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
