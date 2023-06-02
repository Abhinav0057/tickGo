import React from "react";
import QRCode from "qrcode";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckCircle,
  faStickyNote,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const NewPdfPrint = React.forwardRef((props, ref) => {
  const [qrCodeData, setQRCodeData] = useState("");
  useEffect(() => {
    if (props.printTicketPayload?.id) {
      // Generate the QR code data
      const data = props.printTicketPayload?.id; // Replace with your string value
      QRCode.toDataURL(data, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }
        setQRCodeData(url);
      });
    }
  }, [props]);
  return (
    <div ref={ref}>
      <div
        className="   m-5 "
        style={{ backgroundColor: "rgba(224, 0, 0, 0.20)", height: "100%" }}
      >
        <div className="card-body p-0 m-2 ">
          <div className=" w-100  ">
            <div className="d-flex justify-content-between flex-row  mb-1">
              <div>
                <h2 className="fw-bolder"></h2>
                <div
                  className="text-sm-end"
                  style={{ height: "80px", width: "200px" }}
                >
                  <div href="#" className="d-block mw-150px ms-sm-auto">
                    {" "}
                    <div className="logo" style={{ color: "white" }}>
                      <div
                        style={{
                          color: "black",
                          fontSize: "32px",
                          fontWeight: "700",
                        }}
                        className=""
                      >
                        Ticket
                        <span className="go" style={{ color: "red" }}>
                          Go
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="text-sm-end"
                style={{ height: "80px", width: "200px" }}
              >
                <div href="#" className="d-block mw-150px ms-sm-auto">
                  {" "}
                  <div className="logo" style={{ color: "white" }}>
                    <div
                      style={{
                        color: "black",
                        fontSize: "32px",
                        fontWeight: "700",
                      }}
                      className=""
                    >
                      Ticket
                      <span className="go" style={{ color: "red" }}>
                        Go
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" p-4">
              <div style={{ height: "300px", width: "300px" }} className="mb-3">
                <img
                  src={qrCodeData}
                  alt="QR Code"
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
              <div className="d-flex justify-content-center ">
                <h3 className="text-center w-100">
                  {props.printTicketPayload?.event?.title?.toUpperCase()}
                </h3>
              </div>
              <div className="d-flex justify-content-center">
                <h7 className="text-center">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="mr-1 "
                    style={{ color: "red" }}
                  />{" "}
                  {new Date(
                    props.printTicketPayload?.event?.startDate
                  ).toLocaleDateString()}{" "}
                </h7>
              </div>
              <div className="d-flex justify-content-center">
                <h7 className="text-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-1 "
                    style={{ color: "red" }}
                  />
                  {new Date(
                    props.printTicketPayload?.event?.startDate
                  ).toLocaleTimeString()}{" "}
                </h7>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h5>
              Ticket Type: {props.printTicketPayload?.type?.name?.toUpperCase()}
            </h5>
            <h5>
              Ticket Price:{" "}
              {props.printTicketPayload?.type?.price?.toUpperCase()}
            </h5>
            <h5>
              Event Bought at:{" "}
              {new Date(
                props.printTicketPayload?.createdAt
              ).toLocaleDateString()}{" "}
              at{" "}
              {new Date(
                props.printTicketPayload?.createdAt
              ).toLocaleTimeString()}{" "}
            </h5>
            <h6>Payment Partner : {"Khalti".toUpperCase()}</h6>
            <h6>Payment Id : {props.printTicketPayload?.id}</h6>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        ></div>
        <div className="d-flex justify-content-between flex-row  mb-1">
          <div>
            <h2 className="fw-bolder"></h2>
            <div
              className="text-sm-end"
              style={{ height: "80px", width: "200px" }}
            >
              <div href="#" className="d-block mw-150px ms-sm-auto">
                {" "}
                <div className="logo" style={{ color: "white" }}>
                  <div
                    style={{
                      color: "black",
                      fontSize: "32px",
                      fontWeight: "700",
                    }}
                    className=""
                  >
                    Ticket
                    <span className="go" style={{ color: "red" }}>
                      Go
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-sm-end"
            style={{ height: "80px", width: "200px" }}
          >
            <div href="#" className="d-block mw-150px ms-sm-auto">
              {" "}
              <div className="logo" style={{ color: "white" }}>
                <div
                  style={{
                    color: "black",
                    fontSize: "32px",
                    fontWeight: "700",
                  }}
                  className=""
                >
                  Ticket
                  <span className="go" style={{ color: "red" }}>
                    Go
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export { NewPdfPrint };
