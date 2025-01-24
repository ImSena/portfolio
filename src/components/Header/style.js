import React from "react";

import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  color: ${(props) => props.theme.header.color};
  background-color: ${(props) => props.theme.header.background};
  width: 100%;
  position: fixed;
  top: 0;
  height: 6rem;
  z-index: 1000;
  
  .logo h1 {
    font-family: 'Inter', serif;
    font-size: 2rem;
    color:${(props) => props.theme.header.logo};
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      list-style: none;
      display: flex;
      gap: 5rem;

      li {
        cursor: pointer;
        font-size: 1rem;
        color: ${(props) => props.theme.header.color};

        &:hover {
          color: #007bff; /* Destaque no hover */
        }

        &.active { /* Classe correta */
    color: #007bff;
  }
      }
    }
  }

  .actions{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
  }

  button{
    border-color: ${(props) => props.theme.header.button.border};
    color: ${(props) => props.theme.header.button.color};
    background-color: transparent;
  }

  .theme {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme.header.icon};
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }

  .language{
    cursor: pointer;
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;
  }
`;

export default HeaderStyle;