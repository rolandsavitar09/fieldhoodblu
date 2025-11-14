import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaShoppingBag } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      w-full px-6 py-14 text-white
      bg-gradient-to-b from-[#0A0F1F] to-[#001A50]
      border-t border-white/10
      shadow-[0_-4px_20px_#4C8BFF30]
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

        
        <h2
          className="text-transparent bg-clip-text bg-gradient-to-r
          from-[#A9C9FF] to-[#4C8BFF]
          font-black tracking-wide
          text-[32px] sm:text-[28px] xs:text-[24px]"
        >
          FIELDHOOD.BLU
        </h2>

        
        <div className="flex items-center gap-6 text-[24px] sm:text-[22px] xs:text-[20px]">
          <a
            href="https://www.instagram.com/fieldhood.blu?igsh=aTF1c2I3N2U3OHVu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-xl
            hover:bg-white/20 transition
            shadow-[0_0_12px_#4C8BFF40]
            hover:shadow-[0_0_20px_#4C8BFF]"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@fieldhood.blu?_r=1&_t=ZS-91NoKfcn4om"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-xl
            hover:bg-white/20 transition
            shadow-[0_0_12px_#4C8BFF40]
            hover:shadow-[0_0_20px_#4C8BFF]"
          >
            <FaTiktok />
          </a>

          <a
            href="https://id.shp.ee/qd7iQy6"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-xl
            hover:bg-white/20 transition
            shadow-[0_0_12px_#4C8BFF40]
            hover:shadow-[0_0_20px_#4C8BFF]"
          >
            <FaShoppingBag />
          </a>

          <a
            href="https://wa.me/message/RU36JBY4EEW6P1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-xl
            hover:bg-white/20 transition
            shadow-[0_0_12px_#4C8BFF40]
            hover:shadow-[0_0_20px_#4C8BFF]"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* LINE */}
        <div className="w-full h-px bg-white/10"></div>

        {/* COPYRIGHT */}
        <p className="text-white/60 text-[14px] sm:text-[13px] xs:text-[12px] text-center">
          © 2025 FIELDHOOD.BLU — Blue State Mind.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
