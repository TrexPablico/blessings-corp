import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Stores from "./components/Stores";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="overflow-x-hidden bg-white text-dark">
        <Hero />
        <Services />
        <Banner />
        <About />
        <Questions />
        <Stores />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
