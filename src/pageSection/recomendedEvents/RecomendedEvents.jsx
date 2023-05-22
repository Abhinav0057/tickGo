import React from "react";

import RecomemndedCard from "../../UI/RecomemndedCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useGetEvents } from "../../services/fetchers/fetchSomething";
function RecomendedEvents() {
  const { isLoading, data: upCommingDataEvents, error } = useGetEvents();
  return (
    <div className="mt-4 px-5" style={{ backgroundColor: "" }}>
      <h3>Recommended events for you</h3>
      <p>
        Explore a curated selection of highly recommended events that promise
        unforgettable experiences. From exclusive showcases to remarkable
        exhibitions, embrace the extraordinary and indulge in moments that will
        leave you inspired.
      </p>
      <div className="row">
        {isLoading && (
          <>
            <div className="col-12 col-md-6">
              <Skeleton height={300}></Skeleton>
            </div>
            <div className="col-12 col-md-6">
              <Skeleton height={300}></Skeleton>
            </div>
            <div className="col-12 col-md-6">
              <Skeleton height={300}></Skeleton>
            </div>
            <div className="col-12 col-md-6">
              <Skeleton height={300}></Skeleton>
            </div>
          </>
        )}

        {!isLoading &&
          upCommingDataEvents?.length > 0 &&
          upCommingDataEvents[0].map((eventData) => (
            <div className="col-12 col-md-6">
              <Link
                to={`/eventpage/${eventData.id}/${eventData.title}`}
                state={{ myEventData: eventData }}
                style={{ color: "black" }}
              >
                <RecomemndedCard eventData={eventData} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecomendedEvents;
