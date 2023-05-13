import React, { useEffect, useState } from "react";
import { useVerifyBookiingHandler } from "../../services/fetchers/event/event";
import { useNavigate } from "react-router-dom";

const PyamentVeificationpage = () => {
  const { mutateAsync, error, mutate } = useVerifyBookiingHandler();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [responseDataOfBook, setResponseDataOfBook] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
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
      const newAfterBookingApiResponse = JSON.parse(
        localStorage.getItem("Bookapiresponse")
      );
      const bookingData = JSON.parse(localStorage.getItem("afterPayBookData"));
      bookingData.body.paymentId = pidx ?? "gM8DLeJsBqJFCP2Lu2GzLR";

      bookingData.body.transactionId = transaction_id;
      bookingData.body.tickets = newAfterBookingApiResponse?.tickets;
      console.log(bookingData);

      const makeBooking = async () => {
        const responseData = await mutateAsync({
          id: bookingData.id,
          body: bookingData.body,
        });

        if (responseData.status == 200) {
          setIsSuccess(() => true);
          setIsLoading(() => false);
          setIsFirstLoad(() => false);
          setResponseDataOfBook(() => responseData);
        }
        if (responseData.status != 200) {
          setIsError(() => true);
          setIsLoading(() => false);
          setIsFirstLoad(() => false);
          setResponseDataOfBook(() => responseData);
        }
        setIsFirstLoad(() => false);
      };

      makeBooking();
    }
  }, []);

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
