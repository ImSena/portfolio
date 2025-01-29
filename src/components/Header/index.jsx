import React, { useState } from "react";
import { CiBrightnessDown, CiDark } from "react-icons/ci";
import HeaderStyle from "./style";
import { IoLanguageOutline } from "react-icons/io5";
import { useLanguage } from "../../contexts/LanguageContext";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu

const Header = ({ toggleTheme, theme, sections, scroll, activeSection }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <HeaderStyle isMobileMenuOpen={isMobileMenuOpen}>
      <div className="logo">
        <h1>ImSena</h1>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      <nav className={isMobileMenuOpen ? "mobile-menu open" : "mobile-menu"}>
        <ul>
          {sections.map(
            (section) =>
              section.id !== "contact" && (
                <li
                  key={section.id}
                  onClick={() => {
                    scroll(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={activeSection === section.id ? "active" : ""}
                >
                  {section[language]}
                </li>
              )
          )}
        </ul>
      </nav>

      <button onClick={() => scroll("contact")}>
        {language === "en" ? "Contact Me" : "Contate-me"}
      </button>

      <div className="actions">
        <div className="language" onClick={toggleLanguage}>
          <IoLanguageOutline />
          {language === "pt" ? "PT" : "EN"}
        </div>

        <div className="theme" onClick={toggleTheme}>
          {theme === "dark" ? (
            <CiBrightnessDown size={30} />
          ) : (
            <CiDark size={30} />
          )}
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
