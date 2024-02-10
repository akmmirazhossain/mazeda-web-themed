import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

const CoveragePage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-4  max-w-7xl my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20">
          {/* <AboutSection /> */}
          <>
            <section className="body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex  -m-4  justify-center items-center ">
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border box_round_shadow mx-2">
                    <Link
                      target="_blank"
                      href="http://172.22.22.101/home/list_files.php?link=data102.mazedanetworks.net/s1d4/&parent=Latest%20Uploads&cat_name=Latest%20Week"
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/old-ftp.svg" // Path to your logo in the public directory
                          alt="Logo" // Alt text for accessibility
                          width={120} // Set the width of the image
                          height={36} // Set the height of the image
                        />
                      </div>
                    </Link>
                    <div className="mt-4 text-center">
                      <h2 className="text-gray-900 title-font text-3xl font-medium">
                        Old FTP
                      </h2>
                    </div>
                  </div>

                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border box_round_shadow mx-2">
                    <Link target="_blank" href="http://172.22.22.100">
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/new-ftp.png" // Path to your logo in the public directory
                          alt="Logo" // Alt text for accessibility
                          width={120} // Set the width of the image
                          height={36} // Set the height of the image
                        />
                      </div>
                    </Link>
                    <div className="mt-4 text-center">
                      <h2 className="text-gray-900 title-font text-3xl font-medium">
                        New FTP
                      </h2>
                    </div>
                  </div>

                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border box_round_shadow mx-2">
                    <Link target="_blank" href="http://172.22.22.10:32400/">
                      <div className="flex justify-center items-center">
                        <Image
                          src="/images/plex.png" // Path to your logo in the public directory
                          alt="Logo" // Alt text for accessibility
                          width={120} // Set the width of the image
                          height={36} // Set the height of the image
                        />
                      </div>
                    </Link>
                    <div className="mt-4 text-center">
                      <h2 className="text-gray-900 title-font text-3xl font-medium">
                        Plex Movies
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CoveragePage;
