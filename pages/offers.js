import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container_akm nav_space_akm">
          <section className="section_akm">
            <div className="text-center">
              <h1 className="heading_akm">Offers</h1>
              <p className="subheading_akm pb-2">
                Unlock exclusive deals and incentives as you get our internet
                connection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap_akm">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 box_round_shadow"></div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 box_round_shadow mt-4 pt-4 sm:mt-0 text-center sm:text-left"></div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
