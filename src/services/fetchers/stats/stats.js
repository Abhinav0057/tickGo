import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";

import { api } from "../../api";
import { httpClient } from "../../http-helpers";

const getALlStatsHandler = () => () => {
  return httpClient.get(api.stats.statsAll);
};
const getStatsById = (id) => () => {
  return httpClient.get(api.stats.statsById.replace("{id}", id));
};

export const useGetAllStats = () => {
  return useQuery(api.stats.statsAll, getALlStatsHandler(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};

export const useGetStatsById = (id) => {
  return useQuery([api.stats.statsById, id], getStatsById(id), {
    enabled: !!id, // lazy query i.e. id na aako bela samma trigger hunna
    select: ({ data }) => data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
