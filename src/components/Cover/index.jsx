import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import CoverStyle from "./style"; // Estilos do Cover

const Cover = ({activeCover}) => {
  return (
    <CoverStyle activeCover={activeCover}>
      <div className="banner-content">
        <h1>Seja Muito Bem-Vindo</h1>
        <p>Role para baixo para começar</p>
      </div>
      <div className="scroll-indicator">
        <span><FaArrowDown /></span>
      </div>
    </CoverStyle>
  );
};

export default Cover;
