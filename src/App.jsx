import Navbar from "./components/Navbar";
import CreatorSection from "./components/CreatorSection";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SmoothScroll from "./components/SmoothScroll";
import HotelSection from "./components/HotelSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <SmoothScroll>
            <Navbar/>
            <Hero/>
            <AboutSection/>
            <CreatorSection/>
            <HotelSection/>
            <ContactSection/>
            <Footer/>
      </SmoothScroll>
    </div>
  );
}
