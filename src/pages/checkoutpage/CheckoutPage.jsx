import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import { useBookTicketHandler } from "../../services/fetchers/event/event";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.state) {
    var { myEventData } = location?.state;
  }
  const userProfileData = useGetUserProfile();
  console.log(myEventData, userProfileData);
  const { mutateAsync, error, mutate } = useBookTicketHandler();
  const handleSubmitConfirmCheckout = async () => {
    console.log(myEventData?.ticketTypes);
    const tempPayloadData = [];
    myEventData?.ticketTypes.forEach((element) => {
      const tempDict = {
        id: element.id,
        name: element.name,
        description: element.description,
        count: 1,
        price: element.price,
      };
      tempPayloadData.push(tempDict);
    });
    console.log(tempPayloadData);
    const responseData = await mutateAsync({
      id: myEventData.id,
      body: { bookDetails: tempPayloadData },
    });
    if (responseData?.isSuccess) {
      navigate("/");
    }
    navigate("/");
  };
  return (
    <div className=" p-5">
      <div className="mt-3 ">
        <Link
          to={`/eventpage/${myEventData.id}/${myEventData.title}`}
          state={{ myEventData: myEventData }}
        >
          <div className="btn btn-danger m-1">{"<-"}</div>
        </Link>
      </div>
      <div className=" container">
        <div className="text-center">
          <h3>Event Order</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 p-3">
          <h4>Contact info </h4>
          <Form.Group className="p-3" controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              defaultValue={userProfileData?.data?.name ?? "User"}
            />
          </Form.Group>
          <Form.Group className="p-3" controlId="">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              defaultValue={userProfileData?.data?.mail ?? ""}
            />
          </Form.Group>
          <Form.Group className="p-3" controlId="">
            <Form.Label>Contact Detail</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              defaultValue={userProfileData?.data?.phone ?? ""}
            />
          </Form.Group>
          <span className="m-2">
            By submiting, i acccept all the terms and conditions
          </span>
        </div>
        <div className="col-md-6 col-12">
          <div className="m-2">
            <div style={{ border: "2px solid ", borderRadius: "20px" }}>
              <div className="p-3">
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myEventData?.ticketTypes?.map((ticketDesc) => {
                        return (
                          <tr>
                            <td style={{ minWidth: "100px" }}>
                              {ticketDesc?.name}
                            </td>
                            <td style={{ minWidth: "100px" }}>{1}</td>
                            <td style={{ minWidth: "100px" }}>
                              NPR.{ticketDesc?.price}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <hr
                    style={{
                      color: "black",
                      backgroundColor: "black",
                      height: 1,
                    }}
                  />

                  <div>
                    Subtotal: NPR.{" "}
                    {myEventData?.ticketTypes?.reduce((total, ticketDesc) => {
                      return total + Number(ticketDesc.price);
                    }, 0)}
                  </div>
                  <hr
                    style={{
                      color: "black",
                      backgroundColor: "black",
                      height: 1,
                    }}
                  />

                  <div>
                    Grand Total: NPR.{" "}
                    {myEventData?.ticketTypes?.reduce((total, ticketDesc) => {
                      return total + Number(ticketDesc.price);
                    }, 0)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pt-5"
            style={{ justifyContent: "right", display: "flex" }}
          >
            <button
              className="btn btn-danger "
              style={{ borderRadius: "8px" }}
              onClick={handleSubmitConfirmCheckout}
            >
              {" "}
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
