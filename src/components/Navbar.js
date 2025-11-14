import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/fieldhood.blu.svg";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { label: "Home", id: "Home" },
    { label: "Order", id: "Order" },
    { label: "Testimonial", id: "Testimonial" },
    { label: "Feedback", id: "Feedback" },
    { label: "Design Ideas", id: "DesignIdeas" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navHeight = 70;
    const yOffset = el.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({ top: yOffset, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "Home";

      menus.forEach((menu) => {
        const section = document.getElementById(menu.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = menu.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b 
      from-[#0A0F1F] to-[#002A7A] border-b border-white/10 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

        <div className="flex items-center">
          <img
            src={logo}
            alt="FIELDHOOD.BLU"
            className="h-9 md:h-11 w-auto object-contain select-none
                       scale-[3.5] md:scale-[4.9]"
            style={{ transformOrigin: "left center" }}
          />
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => scrollToSection(menu.id)}
              className={`font-extrabold transition-all duration-300
                text-[15px] xl:text-[16px] tracking-wide
                ${
                  active === menu.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A9C9FF] to-[#4C8BFF]"
                    : "text-white/50 hover:text-[#A9C9FF]"
                }`}
            >
              {menu.label}
            </button>
          ))}
        </div>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0A0F1F]/95 backdrop-blur-xl border-t border-white/10 py-3 px-5">
          <div className="flex flex-col gap-2">
            {menus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => scrollToSection(menu.id)}
                className={`font-bold text-[16px] py-2 transition
                  ${
                    active === menu.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#A9C9FF] to-[#4C8BFF]"
                      : "text-white/70 hover:text-[#A9C9FF]"
                  }`}
              >
                {menu.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
