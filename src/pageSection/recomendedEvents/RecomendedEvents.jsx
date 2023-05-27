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
      <h3>Events You’d Love</h3>
      <p>You Might be Interested in these Events Based on Your Preferences</p>
      <div className="row">
        {isLoading && (
          <>
            <div className="col-12 col-md-4 col-sm-6">
              <Skeleton height={300}></Skeleton>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Skeleton height={300}></Skeleton>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Skeleton height={300}></Skeleton>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Skeleton height={300}></Skeleton>
            </div>
          </>
        )}

        {!isLoading &&
          upCommingDataEvents?.length > 0 &&
          upCommingDataEvents[0].map((eventData) => (
            <div className="col-12 col-md-4 col-sm-6">
              <Link
                to={`/eventpage/${eventData.id}/${eventData.title}`}
                state={{ myEventData: eventData }}
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
