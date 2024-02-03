// components/PricingSection.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const pricingData = [
  {
    type: "BRONZE",
    speed: "20 Mbps",
    price: "৳700",
    features: ["Up to 30 Mbps", "Ideal for 2 concurrent users"],
  },
  {
    type: "SILVER",
    speed: "30 Mbps",
    price: "৳1000",
    features: ["Up to 40 Mbps", "Ideal for 3 concurrent users"],
  },
  {
    type: "GOLD",
    speed: "35 Mbps",
    price: "৳1200",
    features: [
      "Up to 50 Mbps",
      "Ideal for 4 concurrent users",
      "FHD TV/Netflix streaming",
    ],
    popular: true,
  },

  {
    type: "PLATINUM",
    speed: "45 Mbps",
    price: "৳1500",
    features: [
      "Up to 60 Mbps",
      "Ideal for 5 concurrent users",
      "2K TV/Netflix streaming",
      "Seamless online gaming",
    ],
  },

  {
    type: "DIAMOND",
    speed: "60 Mbps",
    price: "৳2000",
    features: [
      "Up to 80 Mbps",
      "Ideal for 6 concurrent users",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Priority support",
    ],
  },
  {
    type: "SINGLE",
    speed: "7 Mbps",
    price: "৳500",
    features: ["Up to 15 Mbps", "Ideal for 1 concurrent user"],
  },
];

const PackagesSection = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-flow-col gap-4 sm:gap-5 md:gap-6 justify-items-center">
        <div className=" w-full  rounded-2xl shadow-xl bg-white">
          <div className=" p-4">
            <div>
              <div className="flex justify-between border-b border-gray-200 pb-4 mb-4 text-center">
                <h1 className="text-3xl  leading-none text-center font-medium">
                  Monthly Pricing
                </h1>
              </div>

              <div className="mb-4">
                <p className="flex items-center mb-4 font-medium">
                  These features are inclusive with all of our packages
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#03738C]"
                    />
                  </span>
                  4k Youtube, Facebook and more
                </p>

                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#03738C]"
                    />
                  </span>
                  Gaming cache (100 Mbps)
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#03738C]"
                    />
                  </span>
                  FTP access (Over 11,500 Movies)
                </p>

                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#03738C]"
                    />
                  </span>
                  10 Gbps BDIX Connection
                </p>

                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#03738C]"
                    />
                  </span>
                  24/7 call Support
                </p>

                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#03738C]"
                    />
                  </span>
                  Doorstep support (9 am - 10 pm)
                </p>
              </div>
            </div>
            {/* <button className=" text-center mt-4 text-white bg-[#03738C] border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-700 rounded-full">
              Find your best suited package!
            </button> */}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 w-full">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 ">
            {pricingData.map((pricing, index) => (
              <div key={index} className="p-2  rounded-2xl shadow-xl bg-white">
                <div
                  className={`h-full p-6 rounded-lg  ${
                    pricing.popular ? "border-2 border-red-500" : ""
                  } flex flex-col relative overflow-hidden`}
                >
                  {pricing.popular && (
                    <span className="bg-red-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {pricing.type}
                  </h2>
                  <div className="flex justify-between border-b border-gray-200 pb-4 mb-4 ">
                    <h1 className="text-4xl text-gray-900 leading-none">
                      {pricing.speed}
                    </h1>
                    <h1 className="text-2xl text-gray-900  inline-block align-baseline leading-none">
                      {pricing.price}
                    </h1>
                  </div>

                  <div className="mb-4">
                    {pricing.features.map((feature, idx) => (
                      <p
                        key={idx}
                        className="flex items-center text-gray-600 mb-2"
                      >
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"></span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  <button className=" items-center mt-auto text-center text-white bg-[#03738C] border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-700 rounded-full">
                    <Link href="/contact">
                      {" "}
                      Proceed with this plan{" "}
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
