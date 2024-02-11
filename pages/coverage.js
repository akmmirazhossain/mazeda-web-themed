import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoverageBlocks from "./components/CoverageBlocks";

const CoveragePage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container_akm nav_space_akm">
          <div>
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
