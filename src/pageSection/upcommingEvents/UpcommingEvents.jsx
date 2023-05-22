import React from "react";
import EventCard from "../../UI/EventCard";
import { EffectCoverflow, Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { useUpcommingEvents } from "./useUpcommingEvents";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useGetEvents } from "../../services/fetchers/event/event";
function UpcommingEvents() {
  // const myUpCommingEvents = useUpcommingEvents();
  const { isLoading, data: upCommingDataEvents, error } = useGetEvents();

  return (
    <div className="mt-4 px-5" style={{ backgroundColor: "" }}>
      <h3>Upcoming Events</h3>
      <p>
        Discover a captivating lineup of upcoming events that will ignite your
        curiosity and captivate your senses. From thought-provoking conferences
        to exhilarating performances, immerse yourself in a world of endless
        possibilities.
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
          {upCommingDataEvents?.length > 0 ? (
            upCommingDataEvents[0].map((eventData) => (
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
          ) : (
            <div>
              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <SwiperSlide className="" key={i}>
                    <div className="card ">
                      <div
                        className="card-img-top "
                        style={{ height: "250px", width: "100%" }}
                      >
                        <Skeleton height={500}></Skeleton>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default UpcommingEvents;
