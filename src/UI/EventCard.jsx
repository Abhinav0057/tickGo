import React from "react";
import defaultImage from "../assets/image/defaultConcert.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function EventCard(props) {
  return (
    <div>
      {" "}
      <div className="card " style={{ borderRadius: "16px" }}>
        <div
          className="card-img-top "
          style={{ height: "200px", width: "100%" }}
        >
          {/* condition to see if image url is provided or use default  */}
          {props.eventData?.images?.length > 0 ? (
            <img
              alt={"image"}
              effect="blur"
              cache="true"
              style={{
                height: "200px",
                background: "rgba(0, 0, 0, 0.8)",
                width: "100%",
                objectFit: "contain",
                borderRadius: "16px",
              }}
              src={props.eventData?.images[0].name ?? defaultImage}
            />
          ) : (
            <LazyLoadImage
              src={defaultImage}
              className=""
              alt="..."
              style={{
                height: "200px",
                width: "100%",
                borderRadius: "32px",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div className="card-body" style={{ width: "100%" }}>
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
              }}
            >
              {props?.eventData?.title ?? " "}
            </h3>
          </div>
          <div
            className=""
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p className="">
              <FontAwesomeIcon
                icon={faMap}
                className="mr-1 "
                style={{ color: "red" }}
              />
              {props?.eventData?.location ?? "x"}
            </p>
          </div>
          <div
            className=""
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <p className="">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="mr-1 "
                style={{ color: "red" }}
              />
              {props?.eventData?.date
                ? new Date(props?.eventData?.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "x"}
            </p>
          </div>

          <div className=" ">
            <button type="button" className="btn btn-outline-danger ">
              Buy Tickets{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-1 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
