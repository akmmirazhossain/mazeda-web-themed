// pages/index.js
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import LinksSection from "./components/LinksSection";
import PackagesSection from "./components/PackagesSection";
import PayBillSection from "./components/PayBillSection";
import PromotionsSection from "./components/PromotionsSection";
import StrengthSection from "./components/StrengthSection";
import ClientsSection from "./components/ClientsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import theme from "../config/theme";

function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <div className="container mx-auto light-theme px-4 sm:px-5 md:px-6 lg:p-0 max-w-7xl">
          <ServicesSection />
          <LinksSection />
          <PackagesSection />
          <PayBillSection />
          <PromotionsSection />
          {/* <StrengthSection /> */}
          <ContactForm />
          <ClientsSection />

          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;
