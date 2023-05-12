import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";
import jwt_decode from "jwt-decode";

import { api } from "../../api";
import { httpClient } from "../../http-helpers";

export const handlePayKhalti = (body) => (body) => {
  return httpClient.post(api.payment.postKhaltiPayment, body);
};

export const useKhaltiPost = (params) => {
  const queryClient = useQueryClient();
  return useMutation([api.payment.postKhaltiPayment], handlePayKhalti(params), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [api.events.fetch],
      });
    },
  });
};
