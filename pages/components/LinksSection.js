import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    icon: "faImage",
    count: "Coverage",
    label: "",
  },
  { icon: "faImage", count: "Steps to Pay", label: "" },
  {
    icon: "faImage",
    count: "Entertainment",
    label: "",
  },

  {
    icon: "faImage",
    count: "Get a Connection",
    label: "",
  },
];

const LinkSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-20 mx-auto">
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 text-center gap-4 sm:gap-5 md:gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-4  w-full rounded-2xl shadow-xl bg-white"
            >
              <FontAwesomeIcon icon={faImage} className="text-9xl text-black" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {item.count}
              </h2>
              <p className="leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkSection;
