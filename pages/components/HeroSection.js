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
      <SwiperSlide className="bg-secondary">
        <div
          className="bg-cover bg-center  "
          style={{ backgroundImage: 'url("/images/slider/slider-bg.jpg")' }}
        >
          <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl text-white h-full">
            <div class="grid grid-cols-1 sm:grid-cols-2 h-full">
              <div class="grid grid-rows-4 sm:grid-rows-6 p-4 items-center justify-center">
                <div className="flex items-end h-full text-slate-700 text-3xl sm:text-4xl text-left align-bottom row-span-2 sm:row-span-2 p-4 sm:p-0  shfont">
                  <p>
                    ঘরে বসেই ইন্টারনেট বিল পরিশোধ করুন, <br />
                    কোন অতিরিক্ত খরচ ছাড়া।
                  </p>
                </div>

                <div className="grid justify-items-center sm:justify-items-start row-span-2 sm:row-span-4">
                  <div class="grid grid-rows-3 grid-flow-col gap-2 w-3/4 ">
                    <div className="">
                      <Image
                        src="/images/payment-gateways/bkash.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/master-c.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/amex.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/nagad.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/dbbl.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/takapay.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/visa.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/tap.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/union.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/upay.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <Image
                        src="/images/payment-gateways/diners.svg"
                        width={100}
                        height={100}
                        alt="Slider"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-rows-9 items-start sm:items-end justify-center ">
                <div className="row-span-1"></div>
                <div className="row-span-8">
                  <Image
                    src="/images/slider/pay-bill.png"
                    width={732}
                    height={612}
                    alt="Slider"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* <SwiperSlide className="bg-secondary">
        <div
          className="bg-cover bg-center h-500"
          style={{ backgroundImage: 'url("/images/slider/slide-bg.jpg")' }}
        >
          <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl text-white h-full">
            <div class="grid grid-rows-8 h-full">
              <div class="row-span-3 bg-blue-500 p-4"></div>
              <div class="row-span-2 bg-green-500 p-4 flex items-center justify-center">
                This slide is under construction
              </div>
              <div class="row-span-3 bg-yellow-500 p-4"></div>
            </div>
          </div>
        </div>
      </SwiperSlide> */}

      {/* <SwiperSlide className="bg-secondary" style={{ height: "500px" }}>
        <Image
          src="/images/nature-3.jpg"
          width={500}
          height={500}
          alt="Slider"
        />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default HeroSection;
