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

        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl">
          <div className="container px-5 pb-6 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className=" rounded-full inline-flex items-center justify-center  text-gray-400">
                    <Image
                      src="/images/call-center.webp"
                      width={256}
                      height={256}
                      alt="house"
                    />
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="text-3xl border-b pb-2">Contact Us</h1>
                  <div className="text-gray-600 body-font">
                    <div className="container mx-auto py-8">
                      <p className="mb-1"> Phone: +8809613-334455 </p>
                      <p className="mb-6"> Support: +88 09613 334455</p>
                      <p className="mb-6">
                        Address: House # 123, Flat # B4, Road # 13/A, West
                        Dhanmondi, Dhaka. mazeda@mazedanetworks.net
                      </p>
                      <p>
                        Facebook Page:{" "}
                        <Link
                          target="_blank"
                          href="https://www.facebook.com/mazedanetltd"
                        >
                          https://www.facebook.com/mazedanetltd
                        </Link>
                      </p>
                      <p>
                        Facebook Group:{" "}
                        <Link
                          target="_blank"
                          href="https://www.facebook.com/groups/mazedabdserver/"
                        >
                          https://www.facebook.com/groups/mazedabdserver/
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
