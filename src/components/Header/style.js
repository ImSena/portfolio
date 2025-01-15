import React from "react";

import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  color: #ffffff;

  .logo h1 {
    font-family: 'Inter', serif; /* Estilo elegante para o texto da logo */
    font-size: 2rem;
    color: #ffffff;
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
        color: #d1d1d1; /* Cor clara para o texto */

        &:hover {
          color: #007bff; /* Destaque no hover */
        }
      }
    }
  }

  button{
    border-color: #4FC3F7;
    background-color: transparent;
  }

  .theme {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }

`;

export default HeaderStyle;