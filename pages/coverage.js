import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoverageBlocks from "./components/CoverageBlocks";

const CoveragePage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl">
          <div>
            <h1 className="text-3xl  text-center pt-20 pb-4">Our coverage</h1>
            <p className="text-center">
              Our network grows daily, so stay tuned for updates right here.
            </p>
            <CoverageBlocks />
          </div>
          <div></div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CoveragePage;
