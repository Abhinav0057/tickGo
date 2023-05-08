import React from "react";
import "../../assets/CSS/Styles/SignupCustomer.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  useGetUserRole,
  useRegisterUserProfile,
} from "../../services/fetchers/user/user";
import ErrorMessageComponent from "../../UI/ErrorMessageComponent";

function SignupSecondUser() {
  const myUserRole = useGetUserRole();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch: watch,
  } = useForm();
  const { mutateAsync, error, mutate } = useRegisterUserProfile();
  const onSubmit = async (data) => {
    const payloadData = {
      name: data.useFullName,
      phone: data.phoneNumber,
      gender: data.userGender,
      dob: data.userDOB,
    };
    const formData = new FormData();
    formData.append("name", payloadData.name);
    formData.append("phone", payloadData.phone);
    formData.append("gender", payloadData.gender);
    formData.append("dob", payloadData.dob);

    const returnData = await mutateAsync(payloadData);
    if (returnData?.data) {
      if (myUserRole.role === "company") {
        navigate("/signup/company");
      }
    }
  };
  return (
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
              <div class="title">Let Us Know You</div>
              <div class="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="user-details">
                    <div class="input-box">
                      <span class="details required">Full Name </span>
                      <input
                        type="text"
                        style={{
                          border: errors.useFullName ? "1px solid red" : "",
                        }}
                        {...register("useFullName", {
                          required: "Required",
                        })}
                        placeholder="Full Name"
                      ></input>
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.useFullName?.message}
                        />
                      }
                    </div>
                    <div class="input-box">
                      <span class="details required">Phone </span>
                      <input
                        type="number"
                        name="phone"
                        style={{
                          border: errors.phoneNumber ? "1px solid red" : "",
                        }}
                        {...register("phoneNumber", {
                          required: "Required",
                        })}
                        placeholder="Phone"
                      ></input>
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.phoneNumber?.message}
                        />
                      }
                    </div>

                    <div class="input-box">
                      <span class="details required">Gender</span>
                      <select
                        style={{
                          border: errors.userGender ? "1px solid red" : "",
                        }}
                        {...register("userGender", {
                          required: "Required",
                        })}
                      >
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                      </select>
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.userGender?.message}
                        />
                      }
                    </div>

                    <div class="input-box">
                      <span class="details required">Date Of Birth</span>
                      <input
                        style={{
                          border: errors.userDOB ? "1px solid red" : "",
                        }}
                        type="date"
                        {...register("userDOB", {
                          required: "Required",
                        })}
                        placeholder="DOB"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.userDOB?.message}
                        />
                      }
                    </div>
                  </div>

                  <div class="button">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupSecondUser;
