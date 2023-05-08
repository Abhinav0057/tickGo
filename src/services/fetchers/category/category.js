import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";

import { api } from "../../api";
import { httpClient } from "../../http-helpers";

const getCaregories = () => () => {
  return httpClient.get(api.category.category);
};

export const useGetCategories = () => {
  return useQuery(api.category.category, getCaregories(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
