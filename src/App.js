import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Testimonial from "./components/Testimonial";
import Feedback from "./components/Feedback";
import DesignIdeas from "./components/DesignIdeas";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-poppins text-white scroll-smooth">

      {/* NAVBAR */}
      <Navbar />

      {/* SECTIONS */}
      <section id="Home">
        <Hero />
      </section>

      <section id="Order">
        <Order />
      </section>

      <section id="Testimonial">
        <Testimonial />
      </section>

      <section id="Feedback">
        <Feedback />
      </section>

      <section id="DesignIdeas">
        <DesignIdeas />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;