import React from "react";
import defaultImage from "../assets/image/defaultConcert.jpg";

function EventCard(props) {
  return (
    <div>
      {" "}
      <div className="card ">
        <div
          className="card-img-top "
          style={{ height: "250px", width: "100%" }}
        >
          {/* condition to see if image url is provided or use default  */}
          {/* {props.currentPost.imageUrl ? (
						<img
							alt={'image'}
							effect="blur"
							src={props.imageUrl + props.currentPost.imageUrl}
						/>
					) : (
						<img src={defaultImage} className="" alt="..." />
					)} */}
          <img
            src={defaultImage}
            className=""
            alt="..."
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
          />
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
              {props?.eventData?.title ?? "title"}
            </h3>
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
            <div
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {props?.eventData?.location ?? "location"}
            </div>
          </div>
          <h5
            className=""
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          ></h5>

          <p className="">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            {props?.eventData?.date
              ? new Date(props?.eventData?.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "	23rd July 2023"}
          </p>

          <div className=" ">
            <button type="button" className="btn btn-danger ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
