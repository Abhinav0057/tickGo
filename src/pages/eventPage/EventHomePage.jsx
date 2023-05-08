import React from "react";
import EventDetailSection from "./eventPageSections/EventDetailSection";

import TopImageSection from "./eventPageSections/TopImageSection";
import { useLocation } from "react-router-dom";
import EventTicketPage from "../eventTicketPage/EventTicketPage";

function EventHomePage() {
  const location = useLocation();
  if (location.state) {
    var { myEventData } = location?.state;
  }
  return (
    <div style={{ overflowX: "hidden" }}>
      <TopImageSection myEventData={myEventData} />
      <EventDetailSection myEventData={myEventData} />
      <EventTicketPage myEventData={myEventData} />
    </div>
  );
}

export default EventHomePage;
