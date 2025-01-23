import React from "react";
import { CiBrightnessDown, CiDark } from "react-icons/ci";
import HeaderStyle from "./style";
import { IoLanguageOutline } from "react-icons/io5";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = ({ toggleTheme, theme, sections, scroll, activeSection }) => {

    const { language, toggleLanguage } = useLanguage();

    return (
        <HeaderStyle>
            <div className="logo">
                <h1>ImSena</h1>
            </div>

            <nav>
                <ul>
                    {sections.map((section) => (
                        section.id !== "contact" && (
                            <li
                                key={section.id}
                                onClick={() => scroll(section.id)}
                                className={activeSection === section.id ? "active" : ""}
                            >
                                {section[language]}
                            </li>
                        )
                    ))}
                </ul>

            </nav>


            <button onClick={() => scroll('contact')}>
                {language == 'en' ? 'Contact Me': "Contate-me"}
            </button>

            <div className="language" onClick={toggleLanguage}>
                <IoLanguageOutline />
                {language === "en" ? "PT" : "EN"}
            </div>

            <div className="theme" onClick={toggleTheme}>
                {

                    theme == "dark" ? (
                        <CiBrightnessDown size={30} />
                    ) : (
                        <CiDark size={30} />
                    )
                }
            </div>
        </HeaderStyle>
    );
}

export default Header;