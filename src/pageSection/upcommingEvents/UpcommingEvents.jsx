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
              <Link
                to={`/eventpage/11/event-title`}
                style={{ color: "black" }}
                state={{
                  myEventData: {
                    id: "f2b3b5f7-379e-44cd-b248-92d8ded0d85e",
                    title: "event new 1",
                    description:
                      "<p><strong>This is description</strong></p><ol><li><br></li><li>this is desc</li><li>this is desc</li></ol><p><br></p><ol><li>this is desc</li><li>this is desc</li></ol><p><br></p>",
                    venue: "asdasdasd",
                    ticketTypes: [
                      {
                        id: "172df170-f98d-4eaf-a4b8-9a8daf6470c2",
                        name: "name",
                        count: "10",
                        price: "10",
                        description: "desc",
                      },
                      {
                        id: "9b54278b-976b-4a4c-9c0c-25386c48cb82",
                        name: "name1",
                        count: "10",
                        price: "10",
                        description: "desc1",
                      },
                    ],
                    startDate: "2023-05-25T10:45:00.000Z",
                    endDate: "2023-05-26T10:45:00.000Z",
                    tags: ["a", "b", "c", "d"],
                    createdAt: "2023-05-12T04:54:08.548Z",
                    updatedAt: "2023-05-12T05:15:18.050Z",
                    categories: [
                      {
                        id: "70a25c13-1736-488a-962d-cdeedcd47ac5",
                        name: "Jazz",
                      },
                    ],
                    user: {
                      id: "18c39693-d8b8-4543-853e-93386b6748f4",
                      name: "comapny 1",
                      phone: "9865211213",
                      dob: "2023-04-25",
                      description: "",
                      gender: "Male",
                      createdAt: "2023-04-25T13:55:47.126Z",
                      updatedAt: "2023-04-25T13:55:47.126Z",
                      subscribed: false,
                    },
                  },
                }}
              >
                <EventCard />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default UpcommingEvents;
