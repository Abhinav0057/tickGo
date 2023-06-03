import React from "react";
import backgroundImage from "../../../assets/image/ticketNew.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";

function TopImageSection(props) {
  return (
    <div key={props.myEventData?.ticketTypes?.length}>
      <div
        style={{
          width: "100%",
          height: "90vh",
          dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "90vh",
            position: "relative",
          }}
        >
          <div>
            {props.myEventData?.images?.length > 0 && (
              <div className="">
                <Swiper
                  className="mySwiper"
                  spaceBetween={0}
                  slidesPerView={1}
                  effect="fade"
                  modules={[EffectFade, Navigation, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                >
                  {props.myEventData?.images.map((imageList, i) => {
                    console.log(props.myEventData?.images);
                    return (
                      <SwiperSlide key={imageList.name}>
                        <div className="">
                          <div
                            className=" "
                            style={{ width: "100%", height: "90vh" }}
                          >
                            <img
                              classNmae=""
                              src={imageList.name}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                opacity: "1",
                              }}
                            ></img>

                            {/* <div
                                className="bottomMoreImages"
                                onClick={() => {
                                  props.setIsModelShow(true);
                                  props.setListOfImages(
                                    props.hotelImagesList.slice(0)
                                  );
                                }}
                              >
                                &#xf03e;{" "}
                                {props.hotelImagesList &&
                                  props.hotelImagesList.length - 1}
                                +
                              </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
            {props.myEventData?.images?.length == 0 ||
              (!props.myEventData?.images?.length && (
                <img
                  src={backgroundImage}
                  className=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "90vh",
                    opacity: 0.5,
                  }}
                />
              ))}
          </div>
          <div>
            <div
              className=" pt-2 "
              style={{
                display: "block",
                zIndex: "100",
                position: "absolute",
                top: "0",
                right: "-70%",
                width: "100%",
                top: "30%",
                background:
                  " linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%)",
              }}
            >
              <div
                className="title-head   d-flex  justify-content-end text-end "
                style={{
                  color: "white",
                  fontWeight: "bolder",

                  textAlign: "center !important",
                  width: "30%",
                  fontWeight: "400",

                  fontSize: "60px",
                }}
              >
                Get Notified When We Host
              </div>
              <Link
                to={`/eventpage/${props.myEventData.id}/${props.myEventData.title}/ticket`}
                state={{ ticketData: props.myEventData }}
              >
                <div
                  className="title-head   d-flex  justify-content-end"
                  style={{
                    color: "red",

                    textAlign: "center !important",
                    width: "7%",
                    fontWeight: "400",

                    fontSize: "60px",
                  }}
                >
                  {/* <button type="button" className="btn btn-danger p-2">
                    Buy Now
                  </button> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopImageSection;
