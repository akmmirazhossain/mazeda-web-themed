import React from "react";
import PackagesSection from "./components/PackagesSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PackagesPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20">
          <PackagesSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PackagesPage;
