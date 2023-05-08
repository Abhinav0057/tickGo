import React from "react";

import { useForm } from "react-hook-form";

import {
  useGetUserProfile,
  useGetUserRole,
} from "../../services/fetchers/user/user";
import { useRegisterCompanyDetails } from "../../services/fetchers/user/user";

import ErrorMessageComponent from "../../UI/ErrorMessageComponent";
function SignupCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync, error, mutate } = useRegisterCompanyDetails();

  const onSubmit = async (data) => {
    const payloadData = {
      name: data.companyName,
      description: data.companyDesc,
      registrationDate: data.companyRegistrationDate,
      phone: data.companyPhone,
      registrationNo: data.companyRegistrationNumber,
      PAN: data.companyRegistrationIndex,
      company_docs: data.companyRegistrationDocs[0],
    };
    const formData = new FormData();
    formData.append("name", payloadData.name);
    formData.append("description", payloadData.description);
    formData.append("registrationDate", payloadData.registrationDate);
    formData.append("phone", payloadData.phone);
    formData.append("registrationNo", payloadData.registrationNo);
    formData.append("PAN", payloadData.PAN);
    formData.append("company_docs", data.companyRegistrationDocs[0]);

    const returnData = await mutateAsync(formData);
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
              <div class="title">Your Company Detail</div>
              <div class="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="user-details">
                    <div class="input-box">
                      <span class="details">Company Name</span>
                      <input
                        type="text"
                        style={{
                          border: errors.companyName ? "1px solid red" : "",
                        }}
                        {...register("companyName", {
                          required: "Required",
                        })}
                        placeholder="Company Name"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.companyName?.message}
                        />
                      }
                    </div>
                    <div class="input-box">
                      <span class="details">Phone </span>
                      <input
                        type="number"
                        style={{
                          border: errors.companyPhone ? "1px solid red" : "",
                        }}
                        {...register("companyPhone", {
                          required: "Required",
                        })}
                        placeholder="Phone"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.companyPhone?.message}
                        />
                      }
                    </div>
                    <div class="input-box">
                      <span class="details">Registration Date</span>
                      <input
                        type="date"
                        style={{
                          border: errors.companyRegistrationDate
                            ? "1px solid red"
                            : "",
                        }}
                        {...register("companyRegistrationDate", {
                          required: "Required",
                        })}
                        placeholder="Registration Date"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={
                            errors?.companyRegistrationDate?.message
                          }
                        />
                      }
                    </div>

                    <div class="input-box">
                      <span class="details">Registration Number</span>
                      <input
                        type="text"
                        style={{
                          border: errors.companyRegistrationNumber
                            ? "1px solid red"
                            : "",
                        }}
                        {...register("companyRegistrationNumber", {
                          required: "Required",
                        })}
                        placeholder="Registration Number"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={
                            errors?.companyRegistrationNumber?.message
                          }
                        />
                      }
                    </div>
                    <div class="input-box">
                      <span class="details">PAN/VAT Number</span>
                      <input
                        type="text"
                        style={{
                          border: errors.companyRegistrationIndex
                            ? "1px solid red"
                            : "",
                        }}
                        {...register("companyRegistrationIndex", {
                          required: "Required",
                        })}
                        placeholder="PAN/VAT Number"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={
                            errors?.companyRegistrationIndex?.message
                          }
                        />
                      }
                    </div>

                    <div class="input-box">
                      <span class="details">Company Document</span>
                      <input
                        type="file"
                        style={{
                          border: errors.companyRegistrationDocs
                            ? "1px solid red"
                            : "",
                        }}
                        {...register("companyRegistrationDocs", {
                          required: "Required",
                        })}
                        placeholder="Company Document"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={
                            errors?.companyRegistrationDocs?.message
                          }
                        />
                      }
                    </div>
                    <div class="input-box w-100">
                      <span class="details">Description</span>
                      <input
                        type="textarea"
                        style={{
                          border: errors.companyDesc ? "1px solid red" : "",
                        }}
                        {...register("companyDesc", {
                          required: "Required",
                        })}
                        placeholder="Company Description"
                      />
                      {
                        <ErrorMessageComponent
                          errorMessage={errors?.companyDesc?.message}
                        />
                      }
                    </div>
                  </div>

                  {/* <div class="gender-details">
                            <input
                              type="radio"
                              // value={userRegistration.gender}
                              // onChange={handleInput}
                              name="gender"
                              id="dot-1"
                            />
                            <input
                              type="radio"
                              // value={userRegistration.gender}
                              // onChange={handleInput}
                              name="gender"
                              id="dot-2"
                            />
                            <input
                              type="radio"
                              // value={userRegistration.gender}
                              // onChange={handleInput}
                              name="gender"
                              id="dot-3"
                            />
                            <span class="gender-title">Gender</span>
                            <div class="category">
                              <label for="dot-1">
                                <span class="dot one"></span>
                                <span class="gender">Male</span>
                              </label>
                              <label for="dot-2">
                                <span class="dot two"></span>
                                <span class="gender">Female</span>
                              </label>
                              <label for="dot-3">
                                <span class="dot three"></span>
                                <span class="gender">other</span>
                              </label>
                            </div>
                            {/* <div className="checkbox">
                              <input type="checkbox" name="checkbox" id="checkbox" />
                              <span>
                                I accept all the{" "}
                                <span style={{ color: `red` }}>Terms</span> and{" "}
                                <span style={{ color: `red` }}>Condition.</span>
                              </span>
                            </div> 
                          </div> */}
                  <div class="button">
                    <input
                      type="submit"
                      // value="Register"
                      //   onClick={() => gotowelcome()}
                    />
                  </div>
                  {/* </div> */}
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupCompany;
