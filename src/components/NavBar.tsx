import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClasses = (id: string) => {
    const isActive = activeSection === id;
    const base = "transition-all duration-300 ";
    const activeStyles = "text-[#7B6ED6] underline underline-offset-4 font-semibold";
    const inactiveStyles = "text-[#525252] hover:text-[#806CCB]";
    return base + (isActive ? activeStyles : inactiveStyles);
  };

  return (
    <nav 
      className="fixed top-0 left-0 w-full flex items-center justify-between z-50 bg-white/20 backdrop-blur-sm" 
      style={{ height: "96px", padding: "20px 98px" }}
    >
      <h1 className="text-[34px] text-[#806CCB] tracking-tight" style={{ fontFamily: "'Vidaloka', serif" }}>
        GoldSkin
      </h1>
      <div 
        className="flex items-center gap-10 text-center"
        style={{ 
          fontFamily: "'Noto Sans', sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          letterSpacing: "0%"
        }}
      >
        <a href="#home" className={getLinkClasses("home")}>Home</a>
        <a href="#about" className={getLinkClasses("about")}>About Us</a>
        <a href="#services" className={getLinkClasses("services")}>Services</a>
        <a href="#contact" className={getLinkClasses("contact")}>Contact Us</a>
      </div>
      <button
        className="bg-[#FC9B9B] text-white rounded-2xl shadow-sm hover:bg-[#806CCB] transition-colors text-center"
        style={{
          fontFamily: "'Noto Sans', sans-serif",
          padding: "16px 32px",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          letterSpacing: "0%"
        }}
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
