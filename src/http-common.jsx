import axios from "axios";

export default axios.create({
  baseURL: "http://api.ticketgooo.com/apiV1/",
  // baseURL:
  //   "https://d43b-2400-1a00-b010-acba-14ac-955-3126-a720.ap.ngrok.io/apiV1",

  headers: {
    "content-type": "application/json",
  },
});
