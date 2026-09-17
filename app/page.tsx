import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import PerfectFor from "@/components/PerfectFor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheProblem />
      <Services />
      <BeforeAfter />
      <Benefits />
      <PerfectFor />
      <Contact />
      <Footer />
    </>
  );
}
