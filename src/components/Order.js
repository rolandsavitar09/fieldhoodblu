import React from "react";

import instagramSS from "../assets/images/SS_instagram.png";
import whatsappSS from "../assets/images/SS_whatsapp.png";
import shopeeSS from "../assets/images/SS_shopee.png";
import tiktokSS from "../assets/images/SS_tiktok.png";
import emailSS from "../assets/images/SS_gmail.png";

import { FaInstagram, FaWhatsapp, FaTiktok, FaShoppingBag, FaEnvelope } from "react-icons/fa";

const data = [
  {
    name: "INSTAGRAM",
    img: instagramSS,
    icon: <FaInstagram className="text-white text-xl" />,
    link: "https://www.instagram.com/fieldhood.blu?igsh=aTF1c2I3N2U3OHVu",
  },
  {
    name: "WHATSAPP",
    img: whatsappSS,
    icon: <FaWhatsapp className="text-white text-xl" />,
    link: "https://wa.me/message/RU36JBY4EEW6P1",
  },
  {
    name: "SHOPEE",
    img: shopeeSS,
    icon: <FaShoppingBag className="text-white text-xl" />,
    link: "https://id.shp.ee/qd7iQy6",
  },
  {
    name: "TIKTOK",
    img: tiktokSS,
    icon: <FaTiktok className="text-white text-xl" />,
    link: "https://www.tiktok.com/@fieldhood.blu?_r=1&_t=ZS-91NoKfcn4om",
  },
  {
    name: "EMAIL",
    img: emailSS,
    icon: <FaEnvelope className="text-white text-xl" />,
    link: "mailto:fieldhoodblu@gmail.com",
  },
];

function Order() {
  return (
    <section
      className="w-full min-h-screen px-6 py-16 flex flex-col items-center
      bg-gradient-to-b from-[#0A0F1F] to-[#002A7A]"
    >
      
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9C9FF] to-[#4C8BFF]
        font-black leading-none text-[42px] sm:text-[36px] xs:text-[30px] mb-12 text-center"
      >
        CONTACT & ORDER HERE
      </h1>

     
      <div
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
        backdrop-blur-xl p-6 rounded-3xl border-[2px]
        bg-white/5 bg-clip-border shadow-[0_0_20px_#4C8BFF50]"
        style={{
          borderImage: "linear-gradient(90deg, #4C8BFF, #002A7A) 1",
        }}
      >
        {data.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-xl overflow-hidden
            bg-black/25 backdrop-blur-xl shadow-lg border border-white/10
            transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_#4C8BFF]"
          >
          
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[160px] sm:h-[150px] object-cover 
              group-hover:brightness-110 transition"
            />

            <div
              className="w-full py-3 flex items-center justify-center gap-2
              text-white font-black text-[18px] sm:text-[16px]
              bg-gradient-to-r from-[#002A7A] to-[#4C8BFF]
              group-hover:from-[#003FAD] group-hover:to-[#6DA9FF]
              transition-all"
            >
              {item.icon}
              {item.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Order;