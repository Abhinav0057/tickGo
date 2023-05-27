import styles from "./Header.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import Button from "react-bootstrap/Button";

function HeaderSearch() {
  const {
    register: registerHeaderSearch,
    handleSubmit: handleSubmitHeaderSearch,
    watch: watcHeaderSearch,
    formState: { errors: errorsHeaderSearch },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ width: "100%", height: "90vh", position: "relative" }}>
        <div className={styles.image}></div>
        <div>
          <div
            className="container"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "10",
              color: "white",
            }}
          >
            <h1
              className="title-head d-lg-block text-center"
              style={{
                color: "white",
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: "4.5rem",
              }}
            >
              YOUR TICKET
              <br /> TO
              <br />{" "}
              <span className="memories" style={{ color: "red" }}>
                रमाइलो!{" "}
              </span>
            </h1>
          </div>
        </div>
        {/* <div
          style={{
            position: "absolute",
            bottom: "0%",
            color: "white",

            zIndex: "100",
            filter: "blur(1px)!important",
            borderRadius: "16px 16px 0px 0px",
            // background: "rgba(247,248,250,.5)!important",
            backgroundColor: "rgba(247,248, 250 ,0.5)",

            left: "0%",
            width: "100%",
          }}
          className=""
        >
          <div
            className=""
            style={{
              border: "none ",
              width: "100%",
              height: "180px",
            }}
          >
            <div
              style={{
                width: "100% !important",
              }}
            >
              <div>
                <h3
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    padding: " 10px 20px",
                  }}
                >
                  Find events near you
                </h3>

                <form
                  onSubmit={handleSubmitHeaderSearch(onSubmit)}
                  className="pt-2 "
                  style={{
                    padding: "20px",
                    width: "100% !important",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="row w-100">
                    <div className="col-6 col-md-3 text-center ">
                      <input
                        style={{
                          border: errorsHeaderSearch.eventTitle
                            ? "1px solid red"
                            : "none",
                          height: "3rem",
                          borderRadius: "6px",
                        }}
                        className="inputAnswer w-100 p-2"
                        placeholder="Event Title"
                        type="text"
                        {...registerHeaderSearch("eventTitle", {})}
                        // onClick={() => {
                        // 	setTempBackednError('');
                        // }}
                      ></input>
                    </div>

                    <div className="col-6 col-md-3 text-center">
                      <select
                        style={{
                          border: errorsHeaderSearch.eventCategory
                            ? "1px solid red"
                            : "none",
                          height: "3rem",
                          borderRadius: "6px",
                        }}
                        className="inputAnswer w-100 w-100 p-2"
                        placeholder="Event Category"
                        type="text"
                        {...registerHeaderSearch("eventCategory", {})}
                        // onClick={() => {
                        // 	setTempBackednError('');
                        // }}
                      >
                        <option value="Music">Music</option>
                        <option value="Dance">Dance</option>
                      </select>
                    </div>
                    <div className="col-6 col-md-3 text-center">
                      <input
                        style={{
                          border: errorsHeaderSearch.eventDate
                            ? "1px solid red"
                            : "none",
                          height: "3rem",
                          borderRadius: "6px",
                        }}
                        className="inputAnswer w-100 p-2"
                        placeholder="Event Date"
                        type="date"
                        {...registerHeaderSearch("eventDate", {})}
                        // onClick={() => {
                        // 	setTempBackednError('');
                        // }}
                      ></input>
                    </div>
                    <div
                      className="col-6 col-md-3 d-flex justify-content-center"
                      style={{ alignItems: "center" }}
                    >
                      <div
                        className="mx-4"
                        style={{
                          // fontSize: "18px",
                          // fontWeight: "500",
                          // letterSpacing: "2px",
                          maxHeight: "3rem",
                          // maxWidth: "150px",
                          width: "100%",
                        }}
                      >
                        <Button
                          className="w-100 "
                          variant=" btn btn-danger"
                          style={{
                            padding: "0.8rem 2rem",
                            borderRadius: "0.6rem",
                          }}
                        >
                          Search
                        </Button>{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HeaderSearch;
