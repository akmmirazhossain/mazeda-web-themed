import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

const EntertainLinks = [
  {
    link: "http://172.22.22.101/home/list_files.php?link=data102.mazedanetworks.net/s1d4/&parent=Latest%20Uploads&cat_name=Latest%20Week",
    imageSrc: "/images/old-ftp.svg",
    altText: "Old FTP",
  },
  {
    link: "http://172.22.22.100",
    imageSrc: "/images/new-ftp.png",
    altText: "New FTP",
  },
  {
    link: "http://172.22.22.10:32400/",
    imageSrc: "/images/plex.png",
    altText: "Plex Movies",
  },
];

const Entertainment = () => {
  return (
    <main>
      <Navbar />

      <div className="container_akm h-screen nav_space_akm">
        <section className="section_akm">
          <div className="text-center pb-4">
            <h1 className="heading_akm">Entertainment</h1>
            <p className="subheading_akm ">
              Get 100 Mbps download speeds from these entertainment links.
            </p>
          </div>
          <div className="flex justify-center items-center ">
            {EntertainLinks.map((service, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border box_round_shadow mx-2"
              >
                <Link target="_blank" href={service.link}>
                  <div className="flex justify-center items-center">
                    <Image
                      src={service.imageSrc}
                      alt={service.altText}
                      width={64}
                      height={64}
                    />
                  </div>
                </Link>
                <div className="mt-4 text-center">
                  <h2 className="text-gray-900 title-font text-3xl font-medium">
                    {service.altText}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Entertainment;
