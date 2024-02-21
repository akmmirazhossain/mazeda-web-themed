// components/PricingSection.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowRightLong,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import theme from "@/config/theme";
import Link from "next/link";

const pricingData = [
  {
    type: "TWO",
    speed: "20",
    price: "৳700",
    features: ["Up to 30 Mbps", "Ideal for 2 concurrent users"],
    group: "standard",
  },
  {
    type: "THREE",
    speed: "30",
    price: "৳1000",
    features: ["Up to 40 Mbps", "Ideal for 3 concurrent users"],
    group: "standard",
  },
  {
    type: "FOUR",
    speed: "35",
    price: "৳1200",
    features: [
      "Up to 50 Mbps",
      "Ideal for 4 concurrent users",
      "FHD TV/Netflix streaming",
    ],
    popular: true,
    group: "standard",
  },

  {
    type: "FIVE",
    speed: "45",
    price: "৳1500",
    features: [
      "Up to 60 Mbps",
      "Ideal for 5 concurrent users",
      "2K TV/Netflix streaming",
      "Seamless online gaming",
    ],
    group: "standard",
  },

  {
    type: "SIX",
    speed: "60",
    price: "৳2000",
    features: [
      "Up to 80 Mbps",
      "Ideal for 6 concurrent users",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Priority support",
    ],
    group: "standard",
  },

  {
    type: "SEVEN",
    speed: "80",
    price: "৳3000",
    features: [
      "Up to 100 Mbps",
      "Ideal for 6 - 10 concurrent users",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Priority support",
    ],
    group: "power",
  },

  {
    type: "EIGHT",
    speed: "110",
    price: "৳4000",
    features: [
      "Up to 150 Mbps",
      "Ideal for 10 - 20 concurrent users",
      "4K TV/Netflix streaming",
      "Seamless online gaming",
      "Priority support",
    ],
    group: "power",
  },

  {
    type: "STARTUP",
    speed: "50",
    price: "৳5000",
    features: [
      "Ideal for small offices",
      "Dedicated bandwidth",
      "Free (multi room) logistics setup",
      "FHD meeting live streaming",
      "High priority support",
    ],
    group: "corporate",
  },
  {
    type: "PROFESSIONAL",
    speed: "75",
    price: "৳7000",
    features: [
      "Ideal for medium offices",
      "Dedicated bandwidth",
      "Free (multi room) logistics setup",
      "2K meeting live streaming",
      "Very high priority support",
    ],
    group: "corporate",
  },
  {
    type: "ENTERPRISE",
    speed: "100+",
    price: "৳9000",
    features: [
      "Ideal for big multi-level office complexes",
      "Dedicated bandwidth",
      "Free (multi floor) logistics setup",
      "4K meeting live streaming",
      "Very high priority support",
    ],
    group: "corporate",
  },
  {
    type: "ONE",
    speed: "7",
    price: "৳500",
    features: ["Up to 15 Mbps", "Ideal for 1 concurrent user"],
    group: "standard",
  },
];

const features = [
  "Fiber optic connection",
  "4k Youtube, Facebook and more",
  "Gaming cache (100 Mbps)",
  "FTP access (Over 11,500 Movies)",
  "10 Gbps BDIX Connection",
  "24/7 call Support",
  "Doorstep support (9 am - 10 pm)",
];

const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Set the default tab content to "Standard" group when the component mounts
    const defaultData = pricingData.filter((item) => item.group === "standard");
    setFilteredData(defaultData);
  }, []);

  const handleTabClick = (tabIndex) => {
    let group;
    switch (tabIndex) {
      case 1:
        group = "standard";
        break;
      case 2:
        group = "power";
        break;
      case 3:
        group = "corporate";
        break;
      default:
        group = "standard";
    }
    const newData = pricingData.filter((item) => item.group === group);
    setFilteredData(newData);
    setActiveTab(tabIndex);
  };
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
          <button className=" items-center mt-auto text-center text-white bg-[#03738C] border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-700 rounded-full">
            <Link href="../files/btrc_tariff_policy_isp.pdf">
              {" "}
              BTRC Approved Tariff <FontAwesomeIcon icon={faInfoCircle} />
            </Link>
          </button>
        </div>
        <div className="col-span-1 lg:col-span-3 w-full">
          <div className="grid grid-cols-3  items-center tab_round_shadow">
            <div className="w-full flex justify-center items-center">
              <TabButton
                title="Standard"
                onClick={() => handleTabClick(1)}
                isActive={activeTab === 1}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <TabButton
                title="Power"
                onClick={() => handleTabClick(2)}
                isActive={activeTab === 2}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <TabButton
                title="Corporate"
                onClick={() => handleTabClick(3)}
                isActive={activeTab === 3}
              />
            </div>
          </div>
          <div className="mt-4">
            <TabContent>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 ">
                {filteredData.map((pricing, index) => (
                  <div
                    key={index}
                    className="p-2  rounded-2xl shadow-xl bg-white"
                  >
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
                      <div className="flex justify-between  border-b  pb-4 mb-4 ">
                        <div className="flex flex-row">
                          <p className="text-5xl  leading-none">
                            {pricing.speed}
                          </p>
                          <p className="flex items-end">Mbps</p>
                        </div>
                        <div>
                          <p className="text-2xl inline-block align-baseline leading-none">
                            {pricing.price}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        {pricing.features.map((feature, idx) => (
                          <div key={idx} className="flex mb-2">
                            <div className="mr-2 text-white rounded-full">
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-[#03738C]"
                              />
                            </div>
                            {feature}
                          </div>
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
            </TabContent>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-grow py-2 px-4 font-semibold focus:outline-none`}
      style={{
        borderBottom: isActive
          ? `2px solid ${theme.colorPalette.primaryGreen}`
          : "none",
      }}
    >
      {title}
    </button>
  );
};

const TabContent = ({ children }) => {
  return <div>{children}</div>;
};

export default PackagesSection;
