import React from "react";
import "../../assets/CSS/Styles/SignupCustomer.css";
import ErrorMessageComponent from "../../UI/ErrorMessageComponent";

import { useForm } from "react-hook-form";
import { useRegister } from "../../services/fetchers/user/user";
import { useNavigate } from "react-router-dom";
import { useGetUserRole } from "../../services/fetchers/user/user";

function Signup() {
  const navigate = useNavigate();
  const myUserRole = useGetUserRole();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch: watch,
  } = useForm();
  const { mutateAsync, error, mutate } = useRegister();

  const onSubmit = async (data) => {
    const payloadData = {
      password: data.password,
      email: data.userEmail,
      userName: data.userEmail,
      role: data.userRole,
    };
    const formData = new FormData();
    formData.append("password", data.password);
    formData.append("email", data.userEmail);
    formData.append("userName", data.userEmail);
    formData.append("role", data.userRole);

    const returnData = await mutateAsync(formData);
    if (returnData?.data?.token?.access_token) {
      localStorage.setItem("token", returnData?.data?.token?.access_token);

      if (payloadData.role == "user") {
        navigate("/signup/user");
      }
      if (payloadData.role == "company") {
        navigate("/signup/user");
      }
    }
  };
  return (
    <>
      <div style={{ height: "85vh", width: "100%" }}>
        <div
          style={{
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "70%",
              maxWidth: "850px",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="formWrapper">
              <div className="WelcomeDiv d-md-block d-none">
                <div
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>
                    Ticket
                    <span className="go" style={{ color: `red` }}>
                      Go
                    </span>
                  </h2>
                  <p className="text">Ticketing Memories</p>
                </div>
              </div>
              <div className="formDiv">
                <div className="title">Create A New Account</div>
                <div className="content">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="user-details">
                      <div className="input-box">
                        <label className="details required">Email</label>
                        <input
                          type="text"
                          placeholder="Email"
                          style={{
                            border: errors.userEmail ? "1px solid red" : "none",
                            boxShadow: "0 0 3px black",
                          }}
                          {...register("userEmail", {
                            required: "Required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Enter a valid email ",
                            },
                          })}
                        />
                        {
                          <ErrorMessageComponent
                            errorMessage={errors?.userEmail?.message}
                          />
                        }
                      </div>
                      <div className="input-box">
                        <span className="details required">Sign Up As</span>
                        <select
                          placeholder="Sign Up As"
                          style={{
                            border: errors.userRole ? "1px solid red" : "none",
                            boxShadow: "0 0 3px black",
                          }}
                          {...register("userRole", {
                            required: "Required",
                          })}
                        >
                          <option value={"user"}>Customer</option>
                          <option value={"company"}>Organizer</option>
                        </select>
                        {
                          <ErrorMessageComponent
                            errorMessage={errors?.userRole?.message}
                          />
                        }
                      </div>
                      <div className="input-box">
                        <span className="details required">Password</span>
                        <input
                          type="password"
                          autoComplete="off"
                          name="password"
                          placeholder="Password"
                          style={{
                            border: errors.password ? "1px solid red" : "none",
                            boxShadow: "0 0 3px black",
                          }}
                          {...register("password", {
                            required: "Required",
                            minLength: {
                              value: 8,
                              message: "Must be atleast 8 character long",
                            },
                            pattern: {
                              value:
                                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                              message:
                                "Must contain atleast least a symbol, upper and lower case, letters and a number",
                            },
                          })}
                        />
                        <ErrorMessageComponent
                          errorMessage={errors.password?.message}
                        ></ErrorMessageComponent>
                      </div>

                      <div className="input-box">
                        <span className="details required">
                          Confirm Password
                        </span>
                        <input
                          type="password"
                          style={{
                            border: errors.confirmPassword
                              ? "1px solid red"
                              : "none",
                            boxShadow: "0 0 3px black",
                          }}
                          placeholder="Confirm password"
                          {...register("confirmPassword", {
                            required: "Required",
                            validate: (val) => {
                              if (watch("password") != val) {
                                return "Your passwords do no match";
                              }
                            },
                          })}
                        />
                        <ErrorMessageComponent
                          errorMessage={errors.confirmPassword?.message}
                        ></ErrorMessageComponent>
                      </div>
                    </div>

                    <div className="button">
                      <input type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
