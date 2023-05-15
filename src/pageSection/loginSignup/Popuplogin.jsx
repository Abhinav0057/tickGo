import React from "react";
import "../../assets/CSS/Styles/Popuplogin.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/CSS/Styles/Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/fetchers/auth/auth";
import {
  useGetUserProfile,
  useGetUserRole,
} from "../../services/fetchers/user/user";
import { useNavigate } from "react-router-dom";

// import Signup from "./Signup";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"

function Popuplogin(props) {
  const navigate = useNavigate();
  const { mutateAsync, error, mutate } = useLogin();
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

          <form onSubmit={handleSubmit(onSubmit)}>
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

              <button className="loginbtn" type="submit">
                Login
              </button>
            </div>
            <dixv>
              <p className="signup">
                Don't have an account?
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
              </p>
            </dixv>
          </form>
        </div>
      </div>
    )
  );
}

export default Popuplogin;

// value={formValues.password} onChange={handleChange}
//
