import React from "react";
import PackagesSection from "./components/PackagesSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PackagesPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl">
          <PackagesSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PackagesPage;
