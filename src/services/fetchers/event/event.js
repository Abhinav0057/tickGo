import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";

import { api } from "../../api";
import { httpClient } from "../../http-helpers";

const getSpells = () => () => {
  //use api.sth.sth
  return httpClient.get(api.events.fetch);
};
const getSpellsUnpublished = () => () => {
  return httpClient.get(api.events.fetchUnpublished);
};
export const postEvent = (body) => {
  return httpClient.post(api.events.post, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
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
const checkInTicketHandler = (id) => (id) => {
  return httpClient.post(api.events.checkinTicket.replace("{id}", id));
};

const handleBookTicket = (params) => (params) => {
  return httpClient.post(
    api.events.bookEvent.replace("{id}", params.id),
    params.body
  );
};
const handleVerifyBook = (params) => (params) => {
  return httpClient.post(
    api.events.verifyBooking.replace("{id}", params.id),
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

export const useGetUnpublishedEvents = () => {
  return useQuery(api.events.fetch, getSpellsUnpublished(), {
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
        queryClient.invalidateQueries([
          api.events.fetch,
          api.events.fetchUnpublished,
        ]);
      },
    }
  );
};
export const useCheckInTicketHandler = (id) => {
  const queryClient = useQueryClient();

  return useMutation([api.events.checkinTicket, id], checkInTicketHandler(id), {
    onSuccess: () => {},
  });
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
export const useVerifyBookiingHandler = (params) => {
  const queryClient = useQueryClient();
  return useMutation(
    [api.events.bookEvent, params?.id],
    handleVerifyBook(params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [api.events.fetch],
        });
      },
    }
  );
};
