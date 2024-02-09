import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: "coverage.webp",
    count: "Coverage",
    link: "/coverage",
  },
  { image: "pay.webp", count: "Steps to Pay", link: "/pay-bill" },
  {
    image: "entertainment.webp",
    count: "Entertainment",
    link: "/entertainment",
  },

  {
    image: "new-connection.webp",
    count: "New Connection",
    link: "/contact",
  },
];

const LinkSection = () => {
  return (
    <section className="section_akm">
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 text-center gap_akm">
        {data.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="box_round_shadow">
              <Image
                src={`/images/${item.image}`}
                width={512}
                height={512}
                alt="Slider"
                className="mb-4 rounded-2xl"
              />

              <h2 className="subheading_akm">{item.count}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LinkSection;
