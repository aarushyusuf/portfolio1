import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
