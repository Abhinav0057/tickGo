import React from "react";
import defaultImage from "../assets/image/ticketNew.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";

function RecomemndedCard(props) {
  return (
    <div>
      <div>
        {" "}
        <div className="card  my-3">
          <div
            className="card-img-top "
            style={{
              height: "300px",
              width: "100%",
              position: "relative",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%)",
            }}
          >
            {props.eventData?.images?.length > 0 ? (
              <img
                src={props.eventData?.images[0].name ?? defaultImage}
                className=""
                alt="..."
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <LazyLoadImage
                src={defaultImage}
                className=""
                alt="..."
                style={{ height: "250px", width: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div
            className="card-body"
            style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%)",
            }}
          >
            <div className=" ">
              <button
                type="button"
                className="btn btn-danger "
                style={{
                  borderRadius: "16px",
                  padding: "4px 16px",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                <FontAwesomeIcon icon={faStickyNote} className="mr-1 " /> Buy
                Now
              </button>
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              className="d-flex justify-content-left"
            >
              <h3
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  color: "white",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                }}
              >
                {props?.eventData?.title ?? " "}
              </h3>
            </div>

            <p
              className=""
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "white",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="mr-1 "
                style={{
                  color: "white",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                }}
              />
              {props?.eventData?.date
                ? new Date(props?.eventData?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "	23rd July 2023"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecomemndedCard;
