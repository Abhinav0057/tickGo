import React, { useState } from "react";
import { useBookTicketHandler } from "../../services/fetchers/event/event";
import { useNavigate } from "react-router-dom";

const PyamentVeificationpage = () => {
  const { mutateAsync, error, mutate } = useBookTicketHandler();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseDataOfBook, setResponseDataOfBook] = useState("");

  React.useEffect(async () => {
    const searchParams = new URLSearchParams(
      window.location.href.split("?")[1]
    );
    const pidx = searchParams.get("pidx");
    const amount = searchParams.get("amount");
    const mobile = searchParams.get("mobile");
    const purchase_order_id = searchParams.get("purchase_order_id");
    const purchase_order_name = searchParams.get("purchase_order_name");
    const transaction_id = searchParams.get("transaction_id");
    const khaltiPaymentDict = JSON.parse(
      localStorage.getItem("khaltiPaymentInitiateResponse")
    );
    const bookingData = JSON.parse(localStorage.getItem("afterPayBookData"));
    bookingData.body.paymentId = pidx ?? "gM8DLeJsBqJFCP2Lu2GzLR";
    console.log(bookingData);

    const responseData = await mutateAsync({
      id: bookingData.id,
      body: bookingData.body,
    });

    if (responseData?.isSuccess) {
      //   navigate("/");
      setIsSuccess(() => true);
      setIsLoading(() => false);
      setResponseDataOfBook(() => responseData);
    }
    if (responseData?.isError) {
      setIsError(() => true);
      setIsLoading(() => false);
      setResponseDataOfBook(() => responseData);
    }
  }, []);
  console.log(responseDataOfBook);

  return (
    <div>
      <div style={{ height: "80vh" }}>
        {isLoading && (
          <div className="text-center">Please wait,Booking your tickets...</div>
        )}
        {isError && (
          <div className="text-center">
            Something went wrong with your payment
          </div>
        )}
        {isSuccess && (
          <div className="text-center">We have your tickets booked for you</div>
        )}
      </div>
    </div>
  );
};

export default PyamentVeificationpage;
