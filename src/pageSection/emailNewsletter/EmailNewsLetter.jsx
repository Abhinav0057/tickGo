import React from "react";
import emailNewsLetterBackgrpundImage from "../../assets/image/Rectangle.png";
import { useForm } from "react-hook-form";
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
        height: "60vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <div>
          <img
            src={emailNewsLetterBackgrpundImage}
            alt="Background Image"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "60vh",
              filter: "brightness(40%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            textAlign: "center",
            color: "white",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                fontWeight: "bolder",
                fontSize: "1.7rem",
                lineHeight: "1.5",
              }}
            >
              For New Events, Promo Codes & Discount -{" "}
              <span style={{ color: "red" }}>SUBSCRIBE</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmitHeaderSearch(onSubmit)}>
              <div
                style={{ alignItems: "center", border: "none" }}
                className="d-sm-flex d-block"
              >
                <input
                  style={{
                    border: errorsHeaderSearch.EmailAddress
                      ? "1px solid red"
                      : "none",

                    height: "4rem",
                    width: "100%",
                    borderRadius: "1rem",
                    textDecoration: "none",

                    padding: "4px",
                  }}
                  className={`inputAnswer ${
                    errorsHeaderSearch.EmailAddress ? "input-error" : ""
                  }`}
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
                />
                <Button
                  type="submit"
                  variant="btn btn-outline-danger"
                  className="subscribe-button"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    color: "white",
                    flex: "0.5",
                    lineHeight: "2",
                    borderRadius: "1rem",
                    margin: "6px",
                  }}
                >
                  Subscribe
                </Button>
              </div>
              {errorsHeaderSearch.EmailAddress && (
                <div
                  style={{
                    color: "red",
                    marginTop: "0.5rem",
                  }}
                >
                  {errorsHeaderSearch.EmailAddress.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailNewsLetter;
