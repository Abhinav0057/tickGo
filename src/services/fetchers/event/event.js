import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";

import { api } from "../../api";
import { httpClient } from "../../http-helpers";

const getSpells = () => () => {
  //use api.sth.sth
  return httpClient.get(api.events.fetch);
};
export const postEvent = (body) => {
  return httpClient.post(api.events.post, body);
};
const getUnapprovedEvents = () => () => {
  return httpClient.get(api.events.getUnapprovedEvents);
};
const getApprovedEvents = () => () => {
  return httpClient.get(api.events.getApprovedEvents);
};
const toggleEventApproval = (id) => (id) => {
  return httpClient.put(api.events.toggleEventApproval.replace("{id}", id));
};
const toggleEventPublish = (id) => (id) => {
  return httpClient.put(api.events.togglePublishStatus.replace("{id}", id));
};

const handleBookTicket = (params) => (params) => {
  return httpClient.post(
    api.events.bookEvent.replace("{id}", params.id),
    params.body
  );
};

export const useGetEvents = () => {
  return useQuery(api.events.fetch, getSpells(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
export const usePostAEvent = () => {
  const queryClient = useQueryClient();
  return useMutation(api.events.post, postEvent, {
    onSuccess: () => {
      // queryClient.invalidateQueries({
      //   queryKey: [api.events.fetch],
      // });
    },
  });
};
export const useGetUnapprovedEvents = () => {
  return useQuery(api.events.getUnapprovedEvents, getUnapprovedEvents(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
export const useGetApprovedEvents = () => {
  return useQuery(api.events.getApprovedEvents, getApprovedEvents(), {
    select: (response) => response.data,
    onError: (error) => {
      //   toastFail(error?.response?.data?.message || "Something Went Wrong");
    },
  });
};
export const useToogleEventApproval = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    [api.events.toggleEventApproval, id],
    toggleEventApproval(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            api.events.getUnapprovedEvents,
            api.events.getApprovedEvents,
          ],
        });
      },
    }
  );
};
export const useTooglePublishHandler = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    [api.events.toggleEventPublish, id],
    toggleEventPublish(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [api.events.fetch],
        });
      },
    }
  );
};

export const useBookTicketHandler = (params) => {
  const queryClient = useQueryClient();
  return useMutation(
    [api.events.bookEvent, params?.id],
    handleBookTicket(params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [api.events.fetch],
        });
      },
    }
  );
};
