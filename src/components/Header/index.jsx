import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiBrightnessDown, CiDark } from "react-icons/ci";
import HeaderStyle from "./style";
import { IoLanguageOutline } from "react-icons/io5";
import { useLanguage } from "../../contexts/LanguageContext";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu

const Header = ({ toggleTheme, theme, sections, scroll, activeSection }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPage, setScrollPage] = useState(activeSection);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navigateWithScroll = (id) => {
    navigate("/");
    setScrollPage(id);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      scroll(scrollPage);
    }
  }, [location.pathname]);

  return (
    <HeaderStyle isMobileMenuOpen={isMobileMenuOpen}>
      <div className="logo">
        <Link to={"/"}>
          <h1>ImSena</h1>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      <div className="backdrop" onClick={() => setIsMobileMenuOpen(false)} />

      <nav className={isMobileMenuOpen ? "mobile-menu open" : "mobile-menu"}>
        <ul>
          {sections.map(
            (section) =>
              section.id !== "contact" && (
                <li
                  key={section.id}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      navigateWithScroll(section.id);
                    } else {
                      scroll(section.id);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className={activeSection === section.id ? "active" : ""}
                >
                  {section[language]}
                </li>
              )
          )}
        </ul>

        {
        location.pathname !== "/" ? (
            <button onClick={() => {
              navigateWithScroll("contact")
            }}>
              {language === "en" ? "Contact Me" : "Contate-me"}
            </button>
        ) : (
          <button onClick={() => scroll("contact")}>
              {language === "en" ? "Contact Me" : "Contate-me"}
          </button>
        )
      }

        <div className="mobile-footer">
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
      </nav>
    </HeaderStyle>
  );
};

export default Header;
