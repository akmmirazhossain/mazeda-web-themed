import React from "react";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AboutPage = () => {
  return (
    <>
      <main>
        <Navbar />

        <div className="container_akm nav_space_akm">
          <AboutSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
