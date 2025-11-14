import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaShoppingBag, FaEnvelope } from "react-icons/fa";

function Social() {
  const links = [
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      url: "https://www.instagram.com/fieldhood.blu?igsh=aTF1c2I3N2U3OHVu",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={22} />,
      url: "https://www.tiktok.com/@fieldhood.blu?_r=1&_t=ZS-91NoKfcn4om",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={22} />,
      url: "https://wa.me/message/RU36JBY4EEW6P1",
    },
    {
      name: "Shopee",
      icon: <FaShoppingBag size={22} />,
      url: "https://id.shp.ee/qd7iQy6",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={22} />,
      url: "mailto:fieldhoodblu@gmail.com",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>

      <div className="flex flex-col gap-4">
        {links.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] transition"
          >
            {item.icon} {item.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Social;