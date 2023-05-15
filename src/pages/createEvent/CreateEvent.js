import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../assets/CSS/style.css";
import { useGetCategories } from "../../services/fetchers/category/category";
import React from "react";
import { useFieldArray, Controller, useWatch } from "react-hook-form";
import ErrorMessageComponent from "../../UI/ErrorMessageComponent";
import ReactQuill from "react-quill";

import { usePostAEvent } from "../../services/fetchers/event/event";
const CreateEvent = () => {
  const { mutateAsync, error, mutate } = usePostAEvent();
  const [showNextForm, setShowNextForm] = React.useState(false);
  const [value, setValue] = React.useState("");
  const categoriesData = useGetCategories();
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
    watch: watch1,
  } = useForm();
  const onSubmit1 = async (data) => {
    setShowNextForm(() => true);
  };
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    watch: watch2,
    control: control,
  } = useForm({
    defaultValues: {
      ticketTypes: [
        { name: "name", description: "desc", count: 10, price: 100 },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ticketTypes",
  });
  const onSubmit2 = async (data) => {
    const beforeFormData = watch1();
    // setShowNextForm(() => true);
    const payload = {
      ticketTypes: data.ticketTypes,
      date: new Date().toLocaleDateString(),
      description: value,
      tags: beforeFormData?.eventTags.split(","),
      title: beforeFormData?.eventTitle,
      venue: beforeFormData?.eventLocation,
      categories: [beforeFormData?.eventCategory],
      images: beforeFormData?.eventImages,
      cover: 1,
      type: beforeFormData?.eventTypeIs,
      recurring: beforeFormData?.evenrRecurring,
      startDate: beforeFormData?.eventStartDate,
      endDate: beforeFormData?.eventEndDate,
      location: beforeFormData?.eventLocationLink,
    };
    const formData = new FormData();

    for (let key in payload) {
      if (key === "ticketTypes") {
        for (let i = 0; i < payload.ticketTypes.length; i++) {
          const ticketType = payload.ticketTypes[i];
          for (let ticketKey in ticketType) {
            const ticketValue = ticketType[ticketKey];
            formData.append(`ticketTypes[${i}][${ticketKey}]`, ticketValue);
          }
        }
      } else if (key === "categories" || key === "tags") {
        for (let i = 0; i < payload[key].length; i++) {
          formData.append(`${key}[${i}]`, payload[key][i]);
        }
      } else if (key === "images") {
        for (let i = 0; i < payload.images.length; i++) {
          const image = payload.images[i];
          console.log(image);
          formData.append(`images[${i}]`, "");
        }
      } else {
        formData.append(key, payload[key]);
      }
    }
    console.log(payload.images);
    for (const entry of formData) {
      console.log(entry[0], entry[1]);
    }

    const responseData = await mutateAsync(formData);
  };
  return (
    <Container className="createEvent d-block">
      <h5>Create Events</h5>
      {!showNextForm && (
        <form
          onSubmit={handleSubmit1(onSubmit1)}
          style={{
            padding: 3,
          }}
        >
          <Row className="mt-3 d-block d-sm-flex">
            <Col className="basicDetail">
              <h6>BASIC DETAILS</h6>
              <p>This section contains basic details of your event.</p>
              <div>
                <Form.Group className="mb-3 " controlId="">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: errors1.eventTitle ? "1px solid red" : "",
                    }}
                    {...register1("eventTitle", {
                      required: "Required",
                    })}
                  />
                  {
                    <ErrorMessageComponent
                      errorMessage={errors1?.eventTitle?.message}
                    />
                  }
                </Form.Group>
                <div className="mb-3 ">
                  <Form.Group className="mb-3 " controlId="">
                    <Form.Select
                      aria-label="Default select example"
                      className="me-2"
                      style={{
                        border: errors1.eventCategory ? "1px solid red" : "",
                      }}
                      {...register1("eventCategory", {
                        required: "Required",
                      })}
                    >
                      <option value="" disabled="true">
                        Category
                      </option>
                      {categoriesData?.data &&
                        categoriesData?.data[0]?.length > 0 &&
                        categoriesData?.data[0]?.map((category) => (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </Form.Select>
                    {
                      <ErrorMessageComponent
                        errorMessage={errors1?.eventCategory?.message}
                      />
                    }

                    {/* <Form.Select aria-label="Default select example">
                    <option>Format</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select> */}
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Tags</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="tag1,tag2,tag3"
                    style={{
                      border: errors1.eventTags ? "1px solid red" : "",
                    }}
                    {...register1("eventTags", {
                      required: "Required",
                    })}
                  />
                  {
                    <ErrorMessageComponent
                      errorMessage={errors1?.eventTags?.message}
                    />
                  }
                </Form.Group>
              </div>
            </Col>
            <Col>
              <h6>Date & Time</h6>
              <p>This section contains date and timing of your event.</p>
              <div>
                <div className="d-flex justify-content-between mb-3">
                  <Form.Group className="me-2 w-50" controlId="">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      placeholder=""
                      style={{
                        border: errors1.eventStartDate ? "1px solid red" : "",
                      }}
                      {...register1("eventStartDate", {
                        required: "Required",
                      })}
                    />
                    {
                      <ErrorMessageComponent
                        errorMessage={errors1?.eventStartDate?.message}
                      />
                    }
                  </Form.Group>
                </div>
                <div className="d-flex d-flex justify-content-between mb-3">
                  <Form.Group className="w-50 me-2" controlId="">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      placeholder=""
                      style={{
                        border: errors1.eventEndDate ? "1px solid red" : "",
                      }}
                      {...register1("eventEndDate", {
                        required: "Required",
                      })}
                    />
                    {
                      <ErrorMessageComponent
                        errorMessage={errors1?.eventEndDate?.message}
                      />
                    }
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Reccuring in how many days</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="0 for non recurring"
                    defaultValue={0}
                    style={{
                      border: errors1.evenrRecurring ? "1px solid red" : "",
                    }}
                    {...register1("evenrRecurring", {
                      required: "Required",
                    })}
                  />
                  {
                    <ErrorMessageComponent
                      errorMessage={errors1?.evenrRecurring?.message}
                    />
                  }
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 d-block d-sm-flex">
            <Col className="basicDetail">
              <h6>LOCATION DETAILS</h6>
              <p>This section contains event location details.</p>
              <div>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Location </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: errors1.eventLocation ? "1px solid red" : "",
                    }}
                    {...register1("eventLocation", {
                      required: "Required",
                    })}
                  />
                  {
                    <ErrorMessageComponent
                      errorMessage={errors1?.eventLocation?.message}
                    />
                  }
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Map Link Of Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: errors1.eventLocationLink ? "1px solid red" : "",
                    }}
                    {...register1("eventLocationLink", {
                      required: "Required",
                    })}
                  />
                  {
                    <ErrorMessageComponent
                      errorMessage={errors1?.eventLocationLink?.message}
                    />
                  }
                </Form.Group>
              </div>
            </Col>
            <Col>
              <h6>EVENT DESCRIPTION</h6>
              <p>
                This section contains information you'd like to provide about
                your event of your event.
              </p>
              <div>
                <div className="mb-3">
                  {/* <Form.Label>Summary </Form.Label>
                  <InputGroup size="lg">
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup> */}
                </div>
                <div>
                  <Form.Label>Body </Form.Label>

                  <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 ">
            {/* <Col className="basicDetail">
                <h6>SPONSOR DETAILS</h6>
                <p>This section contains about event sponsor if any.</p>
                <div>
                  <div className="d-flex mb-3">
                    <Form.Group className="me-3 w-50" controlId="">
                      <Form.Label>Sponsor Name</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="">
                      <Form.Label>Detail</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </div>

                  <a href="" className="text-danger">
                    Add More
                  </a>
                </div>
              </Col> */}
            <Col>
              <h6>Event Type</h6>
              <p>This section contains information about event type.</p>
              <div>
                <select
                  defaultValue={"online"}
                  style={{
                    border: errors1.eventTypeIs ? "1px solid red" : "",
                  }}
                  {...register1("eventTypeIs", {
                    required: "Required",
                  })}
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                {
                  <ErrorMessageComponent
                    errorMessage={errors1?.eventTypeIs?.message}
                  />
                }
              </div>
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col>
              <h6>Event Images</h6>
              <p>This section contains the images for the event</p>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  required="true"
                  multiple
                  style={{
                    border: errors1.eventImages ? "1px solid red" : "",
                  }}
                  {...register1("eventImages", {
                    required: "Required",
                  })}
                ></input>
                {
                  <ErrorMessageComponent
                    errorMessage={errors1?.eventImages?.message}
                  />
                }
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <button className=" btn btn-danger text-white" size="lg">
              Next <i class="fa fa-arrow-right"></i>
            </button>
          </div>
        </form>
      )}
      {showNextForm && (
        <form onSubmit={handleSubmit2(onSubmit2)}>
          <Row className="mt-3 ">
            <Col className="basicDetail">
              <h6>Ticket DETAILS</h6>
              <p>
                This section contains sensitive information about your event
                ticket. Please select carefully.
              </p>
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col className="basicDetail">
              <h6>TICKET TYPE & PRICING</h6>
              <p>
                Choose event ticket types and it’s price you want to provide..
              </p>
              <div className="m-3">
                <ul>
                  <div className=" d-flex justify-content-between">
                    <div>Name</div>
                    <div>Description</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Action</div>
                  </div>
                  {fields.map((item, index) => {
                    return (
                      <Form.Group key={item.id} className="d-flex me-2">
                        <Controller
                          render={({ field }) => (
                            <Form.Control {...field} className="m-1" required />
                          )}
                          name={`ticketTypes.${index}.name`}
                          control={control}
                        />

                        <Controller
                          render={({ field }) => (
                            <Form.Control {...field} className="m-1" required />
                          )}
                          name={`ticketTypes.${index}.description`}
                          control={control}
                        />
                        <Controller
                          render={({ field }) => (
                            <Form.Control {...field} className="m-1" required />
                          )}
                          name={`ticketTypes.${index}.count`}
                          control={control}
                        />
                        <Controller
                          render={({ field }) => (
                            <Form.Control {...field} className="m-1" required />
                          )}
                          name={`ticketTypes.${index}.price`}
                          control={control}
                        />
                        <a
                          className="btn btn-danger  m-0 text-white m-1"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </a>
                      </Form.Group>
                    );
                  })}
                </ul>
                <a
                  className="btn btn-success text-white"
                  onClick={() => {
                    append({
                      name: "name",
                      description: "desc",
                      count: 10,
                      price: 100,
                    });
                  }}
                >
                  add more
                </a>
              </div>
            </Col>
          </Row>
          <button className="btn btn-danger text-white m-2 p-2">
            Create Event
          </button>
        </form>
      )}
    </Container>
  );
};

export default CreateEvent;
