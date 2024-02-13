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
      className="mySwiper mt-14 sm:mt-14 md:mt-14 lg:mt-16 xl:mt-18"
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
      {/* <SwiperSlide className="bg-secondary">
        <div
          className="bg-cover bg-center  "
          style={{
            backgroundImage: 'url("/images/slider/slide-bg-internet.png")',
          }}
        >
          <div className="container_akm mx-auto h-600">
            <div class="grid grid-cols-2 gap-4">
              <div class=" p-4">Column 1</div>
              <div class="grid grid-cols-2  p-4  bg-gray-300 -skew-x-12 h-96">
                {" "}
                awd adw
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
      <SwiperSlide className="bg-secondary">
        <div
          className="bg-cover bg-center  "
          style={{
            backgroundImage: 'url("/images/slider/slide-bg-dhaka.png")',
          }}
        >
          <div className="container mx-auto sm:px-5 md:px-6 lg:px-4  max-w-7xl text-white h-full h-600 lg:h-600">
            <div className="grid grid-rows-8 h-full">
              <div className="row-span-3 flex flex-col justify-end items-center text-[#03738C]  -skew-x-12">
                <div className="text-center font-semibold bg-white bg-opacity-70  p-3   text-4xl sm:text-5xl">
                  <p className="skew-x-12">Welcome to Mazeda Networks!</p>
                </div>
                <div className="text-center font-semibold bg-white bg-opacity-70  p-2  text-2xl sm:text-3xl">
                  <p className="skew-x-12">
                    Your Gateway to Seamless Connectivity.
                  </p>
                </div>
              </div>

              <div className="flex row-span-5 justify-center md:justify-between ">
                <div className=" hidden md:block xl:pl-8">
                  <Image
                    src="/images/slider/girl_on_phone.png"
                    width={512}
                    height={512}
                    alt="Slider"
                    loading="eager"
                    className="transform -scale-x-100 pt-4"
                  />
                </div>
                <div className=" h-fit  text-center text-[#03738C] -skew-x-12 bg-white lg:w-2/4 bg-opacity-70 p-2 lg:p-4 text-xl sm:text-lg">
                  <p className="skew-x-12">
                    We are one of the premier internet service providers in
                    Bangladesh, boasting an expert team with over 23 years of
                    experience. Our commitment to excellence ensures that we
                    consistently meet and exceed customer expectations with
                    agility and efficiency.
                  </p>
                  <button class="rounded-full skew-x-12 my-4 bg-[#03738C] text-white px-4 py-2">
                    Learn more
                  </button>
                </div>

                <div className="  xl:pr-8">
                  <Image
                    src="/images/slider/man_on_phone.png"
                    width={512}
                    height={512}
                    alt="Slider"
                    loading="eager"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="bg-cover bg-center  "
          style={{ backgroundImage: 'url("/images/slider/slider-bg.jpg")' }}
        >
          <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-4  max-w-7xl text-white h-full h-600 lg:h-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
              <div className="grid grid-rows-4 sm:grid-rows-6 p-4 items-center justify-center">
                <div className="flex items-end h-full text-slate-700 text-2xl sm:text-4xl text-left align-bottom row-span-2 sm:row-span-2 p-4 sm:p-0  shfont">
                  <p>
                    ঘরে বসেই ইন্টারনেট বিল পরিশোধ করুন, <br />
                    কোন অতিরিক্ত খরচ ছারাই।
                  </p>
                </div>

                <div className="grid justify-items-center sm:justify-items-start row-span-2 sm:row-span-4">
                  <div className="grid grid-rows-3 grid-flow-col gap-2 w-3/4 ">
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
              <div className="grid grid-rows-9 items-start sm:items-end justify-center ">
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
          <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:p-4  max-w-7xl text-white h-full">
            <div className="grid grid-rows-8 h-full">
              <div className="row-span-3 bg-blue-500 p-4"></div>
              <div className="row-span-2 bg-green-500 p-4 flex items-center justify-center">
                This slide is under construction
              </div>
              <div className="row-span-3 bg-yellow-500 p-4"></div>
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
