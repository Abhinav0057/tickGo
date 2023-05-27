import React from "react";
import EventCard from "../../UI/EventCard";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { useUpcommingEvents } from "./useUpcommingEvents";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useGetEvents } from "../../services/fetchers/event/event";
function UpcommingEvents() {
  // const myUpCommingEvents = useUpcommingEvents();
  const {
    isLoading,
    data: upCommingDataEvents,
    error,
    isSuccess,
    isError,
  } = useGetEvents();

  return (
    <div className="mt-4 px-5" style={{ backgroundColor: "" }}>
      <h3>Popular Events Near You</h3>
      <p>These Events are Selling Fast, Grab Your Tickets Now!</p>
      <div className="row">
        {
          <Swiper
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper w-100 "
          >
            {!isLoading ? (
              isSuccess &&
              upCommingDataEvents?.length > 0 &&
              upCommingDataEvents[0].map((eventData) => (
                <>
                  <SwiperSlide className="" key={eventData?.id}>
                    <Link
                      to={`/eventpage/${eventData.id}/${eventData.title}`}
                      state={{ myEventData: eventData }}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <EventCard eventData={eventData} />
                    </Link>
                  </SwiperSlide>
                </>
              ))
            ) : (
              <div>
                {[1, 2, 3, 4, 5].map((i) => {
                  return (
                    <SwiperSlide className="" key={i}>
                      <div className="card ">
                        <div
                          className="card-img-top "
                          style={{ height: "200px", width: "100%" }}
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
        }
        {isSuccess && !upCommingDataEvents?.length > 0 && (
          <h3 className="text-danger text-center">No Events To Preview</h3>
        )}
        {isError && (
          <h3 className="text-danger text-center">Something Went Wrong</h3>
        )}
      </div>
    </div>
  );
}

export default UpcommingEvents;
