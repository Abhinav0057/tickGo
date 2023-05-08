import React from "react";
import emailNewsLetterBackgrpundImage from "../../assets/image/Rectangle.png";

import { useForm } from "react-hook-form";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
function EmailNewsLetter() {
  const {
    register: registerHeaderSearch,
    handleSubmit: handleSubmitHeaderSearch,
    formState: { errors: errorsHeaderSearch },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        width: "100%",
        height: "40vh",
      }}
    >
      <div style={{ width: "100%", position: "relative" }}>
        <div>
          <img
            src={emailNewsLetterBackgrpundImage}
            className=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "inherit",
              filter: "brightness(40%)",
              height: "40vh",
            }}
          />
        </div>
        <div>
          <div
            className=" pt-2 "
            style={{
              display: "block",

              position: "absolute",
              top: "10%",
              width: "100%",
              padding: "20px",
            }}
          >
            <div
              className="title-head   d-flex  justify-content-around align-items-center "
              style={{
                color: "white",
                fontWeight: "bolder",
                justifyContent: "center",
                fontSize: "2rem",
                textAlign: "center !important",
                textShadow: "0 0 1px black",
                width: "100%",
                fontWeight: "400",
              }}
            >
              Get Notified When We Host
            </div>

            <div
              className="title-head   d-flex  justify-content-center"
              style={{
                color: "red",
                textShadow: "0 0 1px white",
                fontWeight: "bolder",
                justifyContent: "center",
                textAlign: "center !important",
                width: "100%",
                fontWeight: "400",
                fontSize: "2rem",
              }}
            >
              New Events
            </div>
            <div
              className="title-head   d-flex  justify-content-center "
              style={{
                color: "red",
                fontWeight: "bolder",
                justifyContent: "center",
                textAlign: "center !important",
                width: "100% !important",
              }}
            >
              <form
                onSubmit={handleSubmitHeaderSearch(onSubmit)}
                className="pt-2  w-100"
              >
                <div className="d-flex w-100 justify-content-center align-items-center">
                  <input
                    style={{
                      border: errorsHeaderSearch.EmailAddress
                        ? "1px solid red"
                        : "none",

                      height: "4rem",
                      width: "80%",
                      borderRadius: "3rem",
                    }}
                    className="inputAnswer  p-3"
                    placeholder="Your Email Address"
                    type="email"
                    {...registerHeaderSearch("EmailAddress", {
                      required: "Please enter your email address",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    // onClick={() => {
                    // 	setTempBackednError('');
                    // }}
                  ></input>
                  <Button
                    className="w-100 p-1 m-1"
                    variant=" btn  btn-outline-danger"
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      letterSpacing: "2px",
                      color: "white",
                      flex: 0.5,
                      lineHeight: 2,
                      borderRadius: "1rem",
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "10%",
            width: "80%",
          }}
          className=""
        ></div>
      </div>
    </div>
  );
}

export default EmailNewsLetter;
