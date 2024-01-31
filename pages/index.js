// pages/index.js
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import LinksSection from "./components/LinksSection";
import PackagesSection from "./components/PackagesSection";
import PromotionsSection from "./components/PromotionsSection";
import StrengthSection from "./components/StrengthSection";
import ClientsSection from "./components/ClientsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import theme from "./config/theme";

function Home() {
  return (
    <>
      <Navbar />
      <main class="container mx-auto light-theme max-w-7xl">
        <HeroSection />
        <ServicesSection />
        <LinksSection />
        <PackagesSection />
        <PromotionsSection />
        <StrengthSection />
        <ContactForm />
        <ClientsSection />
        <Footer />
      </main>
    </>
  );
}

export default Home;
