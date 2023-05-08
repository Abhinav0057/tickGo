import React from "react";
import EventCard from "../../UI/EventCard";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { useUpcommingEvents } from "./useUpcommingEvents";

import { useGetEvents } from "../../services/fetchers/event/event";
function UpcommingEvents() {
  // const myUpCommingEvents = useUpcommingEvents();
  const { isLoading, data: upCommingDataEvents, error } = useGetEvents();

  return (
    <div className="mt-4 px-5" style={{ backgroundColor: "" }}>
      <h3>Upcoming Events</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur a nulla eaque atque, placeat quas
        qui nemo architecto.
      </p>
      <div className="row">
        <Swiper
          effect={"coverflow"}
          // effect={}

          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="mySwiper row"
        >
          {/* {myUpCommingEvents?.data?.data?.length > 0
            ? myUpCommingEvents?.data?.data.map((eventData) => (
                <SwiperSlide className="" key={eventData?.id}>
                  <Link
                    to={`/eventpage/${eventData.id}/${eventData.title}`}
                    style={{ color: "black" }}
                  >
                    <EventCard eventData={eventData} />
                  </Link>
                </SwiperSlide>
              ))
            : null} */}
          {upCommingDataEvents?.length > 0
            ? upCommingDataEvents[0].map((eventData) => (
                <SwiperSlide className="" key={eventData?.id}>
                  <Link
                    to={`/eventpage/${eventData.id}/${eventData.title}`}
                    state={{ myEventData: eventData }}
                    style={{ color: "black" }}
                  >
                    <EventCard eventData={eventData} />
                  </Link>
                </SwiperSlide>
              ))
            : null}
          {[1, 2, 3].map((hotelDeal, i) => (
            <SwiperSlide className="" key={i}>
              {/* <Link to={`/eventpage/11/event-title`} style={{ color: "black" }}> */}
              <EventCard />
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default UpcommingEvents;
