import React from "react";

function EventDetailSection(props) {
  return (
    <div>
      <section className="container">
        <div className="row d-flex">
          {/* <div
            className="  col-12 col-md-6 mt-5"
            style={{
              background: "#F9F3F3",
              boxShadow: " 4px 4px 5px 6px #FFFFFF",
              borderRadius: "10px",
            }}
          >
            <div className="  mt-5 ">
              <div className="box-1  mt-1 mx-sm-3" style={{ width: `95%` }}>
                <div className="text-btn d-flex">
            
                
                </div>
                <p className="prah mt-3 w-100"></p>
            
                <div className="imgwrapper mt-3">
                
                </div>
              </div>
            </div>
          </div> */}
          <div className="  col-12 col-md-12 mt-5 d-flex justify-content-end">
            <div
              className="px-5"
              style={{
                background: "#F9F3F3",
                boxShadow: " 4px 4px 5px 6px #FFFFFF",
                borderRadius: "10px",
              }}
            >
              <h2 className="About1">
                Event By: {props?.myEventData?.user?.name ?? "The Ame Group"}
              </h2>
              <h2>Event Description</h2>

              <p>
                {/* <img src={eventlocation} alt="" /> */}
                Location:{" "}
                <span className="location">
                  {" "}
                  {props.location ?? "location"}
                </span>
              </p>
              <p>
                {/* <img src={eventtime} alt="" /> */}
                Time{" "}
                <span className="time">
                  {new Date(props.myEventData?.startDate).toLocaleTimeString()}
                </span>
              </p>
              <p>
                {/* <img src={eventcalander} alt="" /> */}
                Date{" "}
                <span className="date">
                  {" "}
                  {new Date(props.myEventData?.startDate).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row d-flex">
          <div
            className="  col-12 col-md-6 mt-5"
            style={{
              background: "#F9F3F3",
              boxShadow: " 4px 4px 5px 6px #FFFFFF",
              borderRadius: "10px",
            }}
          >
            <div className="  mt-5 ">
              <div className="box-1  mt-1 mx-sm-3" style={{ width: `95%` }}>
                <h2 className="About">About The Event</h2>
                <p className="prah mt-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props?.myEventData?.description ?? `-`,
                    }}
                  ></div>
                </p>

                <div className="imgwrapper mt-3">
                  {/* <img src={eventfb} alt="" />
									<img src={eventemail} alt="" />
									<img src={eventlinkedin} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="  col-12 col-md-6 mt-5 d-flex justify-content-end">
            <div
              className="px-5"
              style={{
                background: "#F9F3F3",
                boxShadow: " 4px 4px 5px 6px #FFFFFF",
                borderRadius: "10px",
              }}
            >
              <h2>Event Description</h2>

              <p>
                {/* <img src={eventlocation} alt="" /> */}
                Location:{" "}
                <span className="location">
                  {" "}
                  {props.location ?? "location"}
                </span>
              </p>
              <p>
                {/* <img src={eventtime} alt="" /> */}
                Time{" "}
                <span className="time">
                  {new Date(props.myEventData?.startDate).toLocaleTimeString()}
                </span>
              </p>
              <p>
                {/* <img src={eventcalander} alt="" /> */}
                Date{" "}
                <span className="date">
                  {" "}
                  {new Date(props.myEventData?.startDate).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetailSection;
