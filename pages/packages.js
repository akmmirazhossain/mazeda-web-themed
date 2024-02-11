import React from "react";
import PackagesSection from "./components/PackagesSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PackagesPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container_akm nav_space_akm">
          <PackagesSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PackagesPage;
