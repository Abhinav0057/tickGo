import React from "react";
import backgroundImage from "../../../assets/image/defaultConcert.jpg";
import { Link } from "react-router-dom";

function TopImageSection(props) {
  return (
    <div key={props.myEventData?.ticketTypes?.length}>
      <div
        style={{
          width: "100%",
          height: "90vh",
          dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div style={{ width: "100%", height: "90vh", position: "relative" }}>
          <div>
            <img
              src={backgroundImage}
              className=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "90vh",
                opacity: 0.5,
              }}
            />
          </div>
          <div>
            <div
              className=" pt-2 "
              style={{
                display: "block",

                position: "absolute",
                top: "0",
                right: "-70%",
                width: "100%",
              }}
            >
              <div
                className="title-head   d-flex  justify-content-end text-end "
                style={{
                  color: "white",
                  fontWeight: "bolder",

                  textAlign: "center !important",
                  width: "30%",
                  fontWeight: "400",

                  fontSize: "60px",
                }}
              >
                Get Notified When We Host
              </div>
              <Link
                to={`/eventpage/${props.myEventData.id}/${props.myEventData.title}/ticket`}
                state={{ ticketData: props.myEventData }}
              >
                <div
                  className="title-head   d-flex  justify-content-end"
                  style={{
                    color: "red",

                    textAlign: "center !important",
                    width: "7%",
                    fontWeight: "400",

                    fontSize: "60px",
                  }}
                >
                  <button type="button" className="btn btn-danger p-2">
                    Buy Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopImageSection;
