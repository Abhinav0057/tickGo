import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useGetUserProfile } from "../../services/fetchers/user/user";
import { useBookTicketHandler } from "../../services/fetchers/event/event";
import { useNavigate } from "react-router-dom";
import { useEventTickets } from "../eventTicketPage/useEventTickets";
import { useKhaltiPost } from "../../services/fetchers/payment/payment";
import { v4 as uuidv4 } from "uuid";
function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state) {
    var { myEventData, currnetSelectedTicketsToBuy } = location?.state;
  }
  const userProfileData = useGetUserProfile();

  const { mutateAsync, error, mutate } = useBookTicketHandler();
  // const { mutateAsync, error, mutate } = useKhaltiPost();
  const handleSubmitConfirmCheckout = async () => {
    const tempPayloadData = [];
    currnetSelectedTicketsToBuy.forEach((element) => {
      if (element?.currentSelectedValue) {
        const tempDict = {
          id: element.id,
          name: element.name,
          description: element.description,
          count: Number(element.currentSelectedValue),
          price: element.price,
        };
        tempPayloadData.push(tempDict);
      }
    });

    const bookingPayloadLocalStorage = {
      id: myEventData.id,
      body: { bookDetails: tempPayloadData },
    };
    localStorage.setItem(
      "afterPayBookData",
      JSON.stringify(bookingPayloadLocalStorage)
    );
    const grandTotal = currnetSelectedTicketsToBuy.reduce(
      (total, obj) => total + Number(obj.subTotal),
      0
    );

    const newArray = tempPayloadData.map((obj, i) => ({
      identity: obj.id,
      name: obj.name,
      total_price: Number(obj.price) * obj.count * 100,
      quantity: Number(obj.count),
      unit_price: Number(obj.price) * 100,
    }));

    const khaltiPayloadDict = {
      amount: grandTotal * 100,
      customerInfo: {
        name: userProfileData?.data?.name ?? "Ashim Upadhaya",
        email: userProfileData?.data?.auth?.mail ?? "example@gmail.com",
        phone: userProfileData?.data?.phone ?? "9811496763",
      },
      amountBreakDown: [
        {
          label: "Tikcet Price",
          amount: grandTotal * 100,
        },
      ],
      productDetails: newArray,
    };
    bookingPayloadLocalStorage.body.paymentDetails = khaltiPayloadDict;
    console.log(khaltiPayloadDict, JSON.stringify(bookingPayloadLocalStorage));

    // const responseData = await mutateAsync(khaltiPayloadDict);
    // console.log(responseData);
    // if (responseData?.data) {
    //   localStorage.setItem(
    //     "khaltiPaymentInitiateResponse",
    //     JSON.stringify(responseData?.data)
    //   );
    //   console.log(responseData?.data?.payment_url);
    //   window.location.replace(responseData?.data?.payment_url);
    // }
    // navigate("/");
    const responseData = await mutateAsync({
      id: bookingPayloadLocalStorage.id,
      body: bookingPayloadLocalStorage?.body,
    });
    console.log(responseData);

    if (responseData?.status == 200) {
      localStorage.setItem(
        "Bookapiresponse",
        JSON.stringify(responseData?.data)
      );
      window.location.replace(responseData?.data?.paymentResponse?.payment_url);
    }
    // navigate("/");
  };
  return (
    <div className=" p-5">
      <div className="mt-3 ">
        <Link
          to={`/eventpage/${myEventData?.id}/${myEventData?.title}`}
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
              defaultValue={userProfileData?.data?.auth?.email ?? ""}
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
                      {currnetSelectedTicketsToBuy?.map((ticketDesc) => {
                        if (ticketDesc.currentSelectedValue) {
                          return (
                            <tr>
                              <td style={{ minWidth: "100px" }}>
                                {ticketDesc?.name}
                              </td>
                              <td style={{ minWidth: "100px" }}>
                                {ticketDesc.currentSelectedValue}
                              </td>
                              <td style={{ minWidth: "100px" }}>
                                NPR.{ticketDesc?.subTotal}
                              </td>
                            </tr>
                          );
                        }
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
                    {currnetSelectedTicketsToBuy?.reduce(
                      (total, ticketDesc) => {
                        return total + Number(ticketDesc.subTotal);
                      },
                      0
                    )}
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
                    {currnetSelectedTicketsToBuy?.reduce(
                      (total, ticketDesc) => {
                        return total + Number(ticketDesc.subTotal);
                      },
                      0
                    )}
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
              onClick={() => {
                handleSubmitConfirmCheckout();
              }}
            >
              {" "}
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
