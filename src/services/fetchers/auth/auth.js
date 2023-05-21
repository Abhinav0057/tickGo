import { useMutation, useQueryClient } from "react-query";
import { api } from "../../api";
import { toast } from "react-toastify";

import { httpClient } from "../../http-helpers";

//A functino that fetches/posts/puts/deletes from axios
export const login = (body) => {
  return httpClient.post(api.auth.login, body);
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(api.auth.login, login, {
    onSuccess: () => {
      //Suppose taile book garis event, tyo event ko count aba ghatxa, testo bela you invalidate that query because
      //react query le cache ma halxa ani 10 count bhane 10 nai dekhauxa, but you have to refetch it again,
      //so invalidateQueries does this
      //Other way is to do refetchQueries which will refetch the query for more read the docs
      queryClient.invalidateQueries({
        queryKey: [api.user.userprofile],
      });
      toast.success("Successfully logged in");
    },
    onError: () => {
      toast.error("Invalid Credentials");
    },
  });
};

//A hook that uses above axios call functions
export const useSomething = () => {
  const queryClient = useQueryClient();
  return useMutation(api.auth.login, login, {
    onSuccess: () => {
      //Suppose taile book garis event, tyo event ko count aba ghatxa, testo bela you invalidate that query because
      //react query le cache ma halxa ani 10 count bhane 10 nai dekhauxa, but you have to refetch it again,
      //so invalidateQueries does this
      //Other way is to do refetchQueries which will refetch the query for more read the docs
      queryClient.invalidateQueries({
        queryKey: [api.events.fetch],
      });
    },
  });
};

//OR
export const useLogin2 = () => {
  return useMutation({
    mutationFn: login,
  });
};

// usage

const Component = () => {
  const { mutateAsync, error, mutate } = useLogin();
  const submit = async (values) => {
    //mutate async will mutate in async fashion and returns promise
    // mutate will not return anything
    //you can use either
    //if you want data in return like when logging  in you get token and you will save in localStorage
    //use mutateAsync if you dont need data like book event, then there you have invalidated query
    //use mutate, if confused use mutateAsync

    await mutateAsync(values);
  };
  return <form onSubmit={submit}></form>;
};
