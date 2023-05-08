import { useQuery } from "react-query";
import { api } from "../api";
import { httpClient } from "../http-helpers";

const getSpells = () => () => {
  //use api.sth.sth
  return httpClient.get(api.events.fetch);
};

const getEventByIndex = (id) => () => {
  return httpClient.get(api.events.fetchByid.replace("{id}", id));
};

export const useGetEvents = () => {
  return useQuery(api.events.fetch, getSpells(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};

export const useGetEventByIndex = (id) => {
  return useQuery([api.events.fetchByid, id], getEventByIndex(id), {
    enabled: !!id, //lazy query i.e. id na ako bela samma trigger hudaina
    select: ({ data }) => data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
