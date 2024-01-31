// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <Swiper
      className="mySwiper"
      effect="fade"
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      loop={true}
    >
      <div style={{ height: "500px" }}>
        <SwiperSlide className="bg-secondary" style={{ height: "500px" }}>
          <Image
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            width={500}
            height={500}
            alt="Slider"
          />
        </SwiperSlide>

        {/*<SwiperSlide className="bg-primary">
          <div className="position-absolute top-0 start-0">
            <p className="">Your centered text goes here</p>
          </div>
        </SwiperSlide>
         
        <SwiperSlide className="bg-info" style={{ height: "500px" }}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-danger" style={{ height: "500px" }}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </div>
    </Swiper>
  );
};

export default HeroSection;