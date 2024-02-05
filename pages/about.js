import React from "react";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AboutPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20">
          <AboutSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
