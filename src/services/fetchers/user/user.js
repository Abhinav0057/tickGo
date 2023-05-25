import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import { api } from "../../api";
import { httpClient } from "../../http-helpers";

const getSpells = () => () => {
  return httpClient.get(api.user.userprofile);
};
const getMyBookedTickets = () => () => {
  return httpClient.get(api.user.userBookedTickets);
};

export const useGetUserProfile = () => {
  return useQuery(api.user.userprofile, getSpells(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};

export const useGetUserRole = () =>
  localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token"))
    : null;

export const register = (body) => {
  return httpClient.post(api.auth.register, body);
};

export const registerUserProfile = (body) => {
  return httpClient.post(api.user.userprofile, body);
};
export const registerCompanyDetail = (body) => {
  return httpClient.post(api.company.registerCompany, body);
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(api.auth.register, register, {
    onSuccess: () => {
      //Suppose taile book garis event, tyo event ko count aba ghatxa, testo bela you invalidate that query because
      //react query le cache ma halxa ani 10 count bhane 10 nai dekhauxa, but you have to refetch it again,
      //so invalidateQueries does this
      //Other way is to do refetchQueries which will refetch the query for more read the docs
      queryClient.invalidateQueries({
        queryKey: [api.user.userprofile],
      });
    },
  });
};
export const useRegisterUserProfile = () => {
  const queryClient = useQueryClient();
  return useMutation(api.user.userprofile, registerUserProfile, {
    onSuccess: () => {
      //Suppose taile book garis event, tyo event ko count aba ghatxa, testo bela you invalidate that query because
      //react query le cache ma halxa ani 10 count bhane 10 nai dekhauxa, but you have to refetch it again,
      //so invalidateQueries does this
      //Other way is to do refetchQueries which will refetch the query for more read the docs
      queryClient.invalidateQueries({
        queryKey: [api.user.userprofile],
      });
    },
    onSuccess: () => {
      toast.success("Successfully Signedup");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};
export const useRegisterCompanyDetails = () => {
  const queryClient = useQueryClient();
  return useMutation(api.company.registerCompany, registerCompanyDetail, {
    onSuccess: () => {
      //Suppose taile book garis event, tyo event ko count aba ghatxa, testo bela you invalidate that query because
      //react query le cache ma halxa ani 10 count bhane 10 nai dekhauxa, but you have to refetch it again,
      //so invalidateQueries does this
      //Other way is to do refetchQueries which will refetch the query for more read the docs
      queryClient.invalidateQueries({
        queryKey: [api.user.userprofile],
      });
    },
  });
};
export const useGetAllMyUserTickets = () => {
  const queryClient = useQueryClient();
  return useQuery(api.user.userBookedTickets, getMyBookedTickets(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
