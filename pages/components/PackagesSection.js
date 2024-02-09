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
    type: "ULTRA",
    speed: "80 Mbps",
    price: "৳3000",
    features: [
      "Up to 100 Mbps",
      "Ideal for 6 - 10 concurrent users",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Priority support",
    ],
  },

  {
    type: "INFINITE",
    speed: "110 Mbps",
    price: "৳4000",
    features: [
      "Up to 150 Mbps",
      "Ideal for 10 - 20 concurrent users",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Priority support",
    ],
  },

  {
    type: "ENTERPRISE",
    speed: "",
    price: "",
    features: [
      "Speed adjustments will be made based on the overall user count.",
      "Ideal for small/large institutions",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Very high priority support",
    ],
  },
  {
    type: "SINGLE",
    speed: "7 Mbps",
    price: "৳500",
    features: ["Up to 15 Mbps", "Ideal for 1 concurrent user"],
  },
];

const features = [
  "4k Youtube, Facebook and more",
  "Gaming cache (100 Mbps)",
  "FTP access (Over 11,500 Movies)",
  "10 Gbps BDIX Connection",
  "24/7 call Support",
  "Doorstep support (9 am - 10 pm)",
];

const PackagesSection = () => {
  return (
    <section className="section_akm">
      <div className="heading_akm">Monthly Pricing</div>
      <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-flow-col gap_akm justify-items-center">
        <div className="box_round_shadow">
          <p className="body_text_akm font-bold pb-4">
            All packages include these features.
          </p>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-2">
              <div className="mr-2 text-white rounded-full">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#03738C]"
                />
              </div>
              <div>{feature}</div>
            </div>
          ))}
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
                    <span className="text-4xl text-gray-900 leading-none">
                      {pricing.speed}
                    </span>
                    <span className="text-2xl text-gray-900  inline-block align-baseline leading-none">
                      {pricing.price}
                    </span>
                  </div>

                  <div className="mb-4">
                    {pricing.features.map((feature, idx) => (
                      <p key={idx} className="flex mb-2">
                        <div className="mr-2 text-white rounded-full">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-[#03738C]"
                          />
                        </div>
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
