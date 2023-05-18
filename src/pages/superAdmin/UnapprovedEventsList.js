import React from "react";
import { useGetUnapprovedEvents } from "../../services/fetchers/event/event";
import { useToogleEventApproval } from "../../services/fetchers/event/event";
import { Spinner } from "react-bootstrap";

export default function UnapprovedEventsList() {
  const unApprovedEvents = useGetUnapprovedEvents();
  const { mutateAsync, error, mutate } = useToogleEventApproval();

  const handleApproveEventHandler = async (id) => {
    const returnData = await mutateAsync(id);
  };
  return (
    <div className="container">
      <div className="mt-5">
        <h2> Event Control Panel</h2>
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
          unApprovedEvents.data?.length > 0 &&
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
                      Approve Event
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
