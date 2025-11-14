import React from "react";
import logo from "../assets/images/fieldhood.circle.png";

function Hero() {
  return (
    <section
      className="
        relative w-full min-h-screen
        flex flex-col items-center text-center
        px-6 py-20
        bg-gradient-to-b from-[#002A7A] to-[#0A0F1F]
        overflow-hidden
      "
    >
      
      <div
        className="
          absolute top-1/2 left-1/2
          w-[900px] h-[900px]
          rounded-full
          bg-[#4C8BFF20]
          blur-[140px]
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none
        "
      />

      
      <h1
        className="
          text-transparent bg-clip-text 
          bg-gradient-to-r from-[#A9C9FF] to-[#4C8BFF]
          font-black tracking-wide
          text-[48px] sm:text-[42px] xs:text-[36px]
          mb-4
          animate-fade-down
        "
      >
        ABOUT
      </h1>

      
      <div className="w-24 h-[3px] bg-white/20 rounded-full mb-6" />

     
      <img
        src={logo}
        alt="fieldhood"
        className="
          w-[180px] sm:w-[150px] xs:w-[120px]
          aspect-square object-contain
          my-4 select-none
          drop-shadow-[0_0_20px_#4C8BFF60]
          animate-fade-up
        "
      />

      
      <h2
        className="
          text-white font-extrabold tracking-wide
          text-[28px] sm:text-[24px] xs:text-[20px]
          mt-4 mb-4
          animate-fade-up delay-150
        "
      >
        ARTI FIELDHOOD.BLU
      </h2>

      
      <p
        className="
          text-white/90 font-medium leading-relaxed
          max-w-3xl
          text-[18px] sm:text-[16px] xs:text-[15px]
          animate-fade-up delay-200
        "
      >
        FIELDHOOD diambil dari dua kata – <strong>FIELD</strong> dan <strong>HOOD</strong>.<br />
        FIELD: Melambangkan lapangan, tribun, dan jiwa kebersamaan.<br />
        HOOD: Menggambarkan lingkungan, solidaritas, dan rasa memiliki.<br />
        “Blu” berasal dari bahasa Italia yang berarti biru, identitas kebanggaan AREMA.
      </p>

      
      <div
        className="
          mt-10 px-7 py-5
          max-w-3xl rounded-2xl
          bg-white/10 backdrop-blur-md
          border border-white/10
          shadow-[0_0_25px_#4C8BFF40]
          hover:shadow-[0_0_40px_#4C8BFF70]
          transition-all duration-300
          animate-fade-up delay-300
        "
      >
        <p
          className="
            text-white font-semibold
            text-[18px] sm:text-[16px] xs:text-[15px]
            leading-snug
          "
        >
          FIELDHOOD.BLU – Lahir dari lapangan, tumbuh dalam kebersamaan, dan
          hidup dalam semangat biru.
        </p>
      </div>
    </section>
  );
}

export default Hero;