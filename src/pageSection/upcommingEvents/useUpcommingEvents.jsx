import apiClient from "../../http-common";

import { useQuery } from "react-query";

export const useUpcommingEvents = () => {
  //All Logic Here

  // const {
  //   isLoading: isLoadingEvenst,
  //   refetch: getAllEvents,
  //   data: dataEvents,
  //   error: errorEvents,
  //   isSuccess: isSuccessEvents,
  //   isError: isErrorEvents,
  // } = useQuery("upcomming-events", async () => {
  //   return await apiClient.get("/event");
  // });

  //Fetching, filtering, etc etc
  // here we notmally return the data from the data from the api call of ues query fetcher

  // an event will trigger this function call

  // function getAllEvents123() {
  //   try {
  //     getAllEvents();
  //   } catch (err) {
  //     //   setGetResult(fortmatResponse(err));
  //   }
  // }

  return {
    // isLoading: isLoadingProducts,
    // refetch: getAllProducts,
    // data: dataEvents,
    // error: errorProducts,
    // isSuccess: isSuccessProducts,
    // isError: isErrorProducts,
  };
};
