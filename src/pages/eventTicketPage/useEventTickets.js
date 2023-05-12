import React from "react";

export const useEventTickets = (props) => {
  const [currnetSelectedTicketsToBuy, setcurrnetSelectedTicketsToBuy] =
    React.useState([]);
  const [totalNumberOfTicketSelected, seTotalNumberOfTicketSelected] =
    React.useState(1);
  React.useEffect(async () => {
    if (props?.allTicketsData?.length > 0) {
      const tempArray = [];
      props?.allTicketsData?.forEach((tickettype) => {
        const tempDIct = { ...tickettype };
        tempDIct.currentSelectedValue = 1;
        tempDIct.subTotal = tickettype.price;
        tempArray.push(tempDIct);
      });
      const tempLengthIs = tempArray?.length;
      seTotalNumberOfTicketSelected(() => tempLengthIs);
      setcurrnetSelectedTicketsToBuy(() => tempArray);
    }
  }, [props?.allTicketsData]);

  const increaseTicketCountHandler = (ticketId) => {
    const index = currnetSelectedTicketsToBuy.findIndex(
      (obj) => obj.id === ticketId
    );
    const tempArray = [...currnetSelectedTicketsToBuy];
    const selectedDict = currnetSelectedTicketsToBuy[index];

    if (selectedDict.count > selectedDict.currentSelectedValue) {
      selectedDict.currentSelectedValue = selectedDict.currentSelectedValue + 1;
      selectedDict.subTotal = parseFloat(
        selectedDict.currentSelectedValue * selectedDict.price
      ).toFixed(2);
    }
    tempArray[index] = selectedDict;
    setcurrnetSelectedTicketsToBuy(() => tempArray);
  };
  const decreaseTicketCountHandler = (ticketId) => {
    const index = currnetSelectedTicketsToBuy.findIndex(
      (obj) => obj.id === ticketId
    );
    const tempArray = [...currnetSelectedTicketsToBuy];
    const selectedDict = currnetSelectedTicketsToBuy[index];

    if (selectedDict.currentSelectedValue > 0) {
      selectedDict.currentSelectedValue = selectedDict.currentSelectedValue - 1;
      selectedDict.subTotal = parseFloat(
        selectedDict.currentSelectedValue * selectedDict.price
      ).toFixed(2);
    }
    tempArray[index] = selectedDict;
    setcurrnetSelectedTicketsToBuy(() => tempArray);
  };
  return {
    currnetSelectedTicketsToBuy: currnetSelectedTicketsToBuy,
    totalNumberOfTicketSelected: totalNumberOfTicketSelected,
    increaseTicketCountHandler: increaseTicketCountHandler,
    decreaseTicketCountHandler: decreaseTicketCountHandler,
  };
};
