import React from "react";
import "../../assets/CSS/Styles/Popuplogin.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/CSS/Styles/Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/fetchers/auth/auth";
import { toast } from "react-toastify";
import {
  useGetUserProfile,
  useGetUserRole,
} from "../../services/fetchers/user/user";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// import Signup from "./Signup";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"

function Popuplogin(props) {
  const navigate = useNavigate();
  const {
    mutateAsync,
    error,
    mutate,
    isError,
    isLoading: isLoadingLogin,
  } = useLogin();
  const {
    isLoading: isLoadingUserProfile,
    data: useProfileData,
    error: getUserError,
  } = useGetUserProfile();
  const userRole = useGetUserRole();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const responseData = await mutateAsync(data);
    if (responseData?.data?.token) {
      localStorage.setItem("token", responseData?.data?.token?.access_token);
      const now = new Date("2024-01-02");
      document.getElementById("loginForm").reset();
      localStorage.setItem("tokenExpiration", now);

      navigate("/");
      props.setTrigger(() => false);
    }
  };

  return (
    props.trigger && (
      <div className="popup">
        <div className="popup-inner ">
          {/* <div className=" w-100" style={{ paddingLeft: "95%" }}>
            <a
              className=""
              style={{ color: "red", display: "block", cursor: "pointer" }}
              onClick={() => {
                props.setTrigger(() => false);
                reset({
                  username: "",
                  password: "",
                });
              }}
            >
              x{userRole?.roles}
            </a>
          </div> */}

          <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label className="text1">Username</label>
                <input
                  className="box1"
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  {...register("userName", { required: "requried" })}
                />
                <div
                  className="text1 p-0 m-0"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {errors?.username?.message}
                </div>
              </div>
              <div className="field1">
                <label className="text2">Password</label>
                <input
                  className="box2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...register("password", { required: "requried" })}
                />
                <div
                  className="text1 p-0 m-0"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {errors?.password?.message}
                </div>
              </div>

              {!isLoadingLogin && (
                <button className="loginbtn" type="submit">
                  Login
                </button>
              )}
              {isLoadingLogin && (
                <button className="loginbtn" type="submit">
                  <Spinner
                    className=""
                    style={{ height: "20px", width: "20px", color: "white" }}
                    animation="border"
                  />
                </button>
              )}
            </div>

            <div>
              <p className="signup ">
                Don't have an account?
                {isLoadingLogin ? (
                  <span className="text-danger"> Sign Up</span>
                ) : (
                  <NavLink
                    to="/signup"
                    style={{
                      marginLeft: "3px",
                    }}
                    className="signlink"
                    onClick={() => props.setTrigger(() => false)}
                  >
                    Sign up
                  </NavLink>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Popuplogin;

// value={formValues.password} onChange={handleChange}
//
