import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PhoneNumbers from "./components/common/phone-numbers";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container_akm nav_space_akm">
          <section className="section_akm">
            <div className="text-center pb_akm">
              <h1 className="heading_akm">Contact</h1>
              <p className="subheading_akm ">
                Our lines are open 24/7, and we&apos;re always happy to hear
                from you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap_akm">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 box_round_shadow">
                <Image
                  src="/images/call-center.png"
                  alt="Call center image"
                  width={800}
                  height={1067}
                  className="rounded-2xl"
                />
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 box_round_shadow mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="container mx-auto py-8">
                  <p className="mb-1 bg-cyan-300 pad_akm rounded-2xl font-medium text-xl">
                    {" "}
                    Inqueries: 09613 334455
                  </p>
                  <p className="mb-1 bg-orange-300 pad_akm rounded-2xl  font-medium text-xl">
                    {" "}
                    Support: 09613 334455, 09666 334455
                  </p>

                  <p className="mb-6 bg-green-300 pad_akm rounded-2xl  font-medium text-xl">
                    {" "}
                    New Connection: 09613 334455
                  </p>
                  <p className="mb-6">
                    <span className="font-bold">Headquarters Address:</span>{" "}
                    House # 123, Flat # B4, Road # 13/A, West Dhanmondi, Dhaka.
                    mazeda@mazedanetworks.net
                  </p>
                  <p>
                    <span className="font-bold">Facebook Page: </span>{" "}
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/mazedanetltd"
                    >
                      facebook.com/mazedanetltd
                    </Link>
                  </p>
                  <p>
                    <span className="font-bold">Facebook Group: </span>{" "}
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/groups/mazedabdserver/"
                    >
                      facebook.com/groups/mazedabdserver
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
