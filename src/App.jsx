import Navbar from "./components/Navbar";
import CreatorSection from "./components/CreatorSection";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SmoothScroll from "./components/smoothScroll";

export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <SmoothScroll>
            <Navbar/>
            <Hero/>
            <AboutSection/>
            <CreatorSection/>
      </SmoothScroll>
    </div>
  );
}
