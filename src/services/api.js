export const api = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  events: {
    fetchByid: "/event/{id}",
    fetch: "/event",
    fetchUnpublished: "/event?isPublished=false",
    post: "/event",
    getUnapprovedEvents: "/event/approval/pending",
    getApprovedEvents: "/event/approval/complete",
    toggleEventApproval: "/event/toggle-approval/{id}",
    togglePublishStatus: "/event/toggle-publish/{id}",
    bookEvent: "/event/book/{id}",
    verifyBooking: "/event/verify-booking/{id}",
  },
  user: {
    userprofile: "/user",
    userBookedTickets: "/user/my-tickets",
  },
  company: {
    registerCompany: "/company",
  },
  category: {
    category: "/category",
  },
  payment: {
    postKhaltiPayment: "/payment/khalti-pay",
  },
  stats: {},
};
