import React, { useState, useEffect, useRef } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './View/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Projects from './View/Projects';
import NotFound from './View/NotFound';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from './styles/globalStyles';
import Cover from './components/Cover';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [activeSection, setActiveSection] = useState("home");
  const [activeCover, setActiveCover] = useState(true);
  const [activeHeader, setActiveHeader] = useState(false);
  const sectionRefs = useRef([]);

  const sections = [
    { id: "home", en: "Home", pt: "Inicio" },
    { id: "about", en: "About", pt: "Sobre" },
    { id: "skills", en: "Skills", pt: "Habilidades" },
    { id: "projects", en: "Projects", pt: "Projetos" },
  ];

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && activeCover) {
        setActiveCover(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [activeCover]);

  const scrollToSection = (id) => {
    const section = sectionRefs.current.find((ref) => ref.id === id);
    if (section) {
      document.querySelector("header").offsetHeight;
      const offset = section.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.2);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div style={{ position: "relative" }}>
          <Cover activeCover={activeCover} />
          <div className={`content-wrapper ${activeCover ? "hidden" : ""}`}>
            <BrowserRouter>
              <Header
                toggleTheme={toggleTheme}
                theme={theme}
                sections={sections}
                scroll={scrollToSection}
                activeSection={activeSection}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      sections={sections}
                      sectionRefs={sectionRefs}
                      setActiveSection={setActiveSection}
                    />
                  }
                />
                <Route path="/project/:slug" element={<Projects />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
