import React, { useRef } from "react";

import testi1 from "../assets/images/testi_1.png";
import testi2 from "../assets/images/testi_2.png";
import testi3 from "../assets/images/testi_3.png";
import testi4 from "../assets/images/testi_4.png";
import testi5 from "../assets/images/testi_5.png";
import testi6 from "../assets/images/testi_6.png";
import testi7 from "../assets/images/testi_7.png";
import testi8 from "../assets/images/testi_8.png";
import testi9 from "../assets/images/testi_9.png";
import testi10 from "../assets/images/testi_10.png";

const testimonials = [
  testi1, testi2, testi3, testi4, testi5,
  testi6, testi7, testi8, testi9, testi10
];

function Testimonial() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      className="w-full min-h-screen px-6 py-16 flex flex-col items-center
      bg-gradient-to-b from-[#002A7A] to-[#0A0F1F]"
    >
      
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9C9FF] to-[#4C8BFF]
        font-black leading-none text-[42px] sm:text-[36px] xs:text-[30px] text-center"
      >
        TESTIMONIAL
      </h1>

      
      <p
        className="text-white font-semibold opacity-90 mt-4 mb-10
        text-[18px] sm:text-[17px] xs:text-[15px] text-center max-w-2xl"
      >
        Testimoni lebih lengkap bisa dilihat di sorotan Instagram @FIELDHOOD.BLU
      </p>

      
      <div className="relative w-full max-w-6xl">

      
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2
          bg-gradient-to-b from-[#002A7A] to-[#4C8BFF]
          text-white p-3 rounded-full backdrop-blur-xl
          shadow-[0_0_12px_#4C8BFF80]
          hover:shadow-[0_0_20px_#4C8BFF]
          hover:scale-110 active:scale-95
          transition-all duration-300 z-10"
        >
          ‹
        </button>

       
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-10 py-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((src, i) => (
            <div
              key={i}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px]
              rounded-[20px] overflow-hidden bg-white/5 backdrop-blur-xl
              border border-white/10 shadow-lg
              transition-all duration-300 hover:shadow-[0_0_25px_#4C8BFF]"
            >
              <img
                src={src}
                alt={`testimonial-${i + 1}`}
                className="w-full h-auto rounded-[20px] select-none
                hover:brightness-110 transition"
              />
            </div>
          ))}
        </div>

        
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2
          bg-gradient-to-b from-[#002A7A] to-[#4C8BFF]
          text-white p-3 rounded-full backdrop-blur-xl
          shadow-[0_0_12px_#4C8BFF80]
          hover:shadow-[0_0_20px_#4C8BFF]
          hover:scale-110 active:scale-95
          transition-all duration-300 z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Testimonial;