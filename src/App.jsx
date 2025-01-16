import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './View/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './View/Projects';
import NotFound from './View/NotFound';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from './styles/globalStyles';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
        <BrowserRouter>
          <Header toggleTheme={toogleTheme} theme={theme}/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
