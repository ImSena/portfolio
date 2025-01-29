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
    font-family: "Inter", serif;
    font-size: 2rem;
    color: ${(props) => props.theme.header.logo};
  }

  .hamburger {
    display: none;
    cursor: pointer;
    color: ${(props) => props.theme.header.icon};
  }

  nav {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      gap: 5rem;

      li {
        cursor: pointer;
        font-size: 1rem;
        color: ${(props) => props.theme.header.color};

        &:hover {
          color: #007bff;
        }

        &.active {
          color: #007bff;
        }
      }
    }
  }

  button {
    border-color: ${(props) => props.theme.header.button.border};
    color: ${(props) => props.theme.header.button.color};
    background-color: transparent;
  }

  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
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

  .language {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 1rem 2rem;

    .hamburger {
      display: block;
    }

    nav {
      position: fixed;
      top: 6rem;
      right: 0;
      height: 100vh;
      width: 60%;
      background-color: ${(props) => props.theme.header.background};
      display: ${(props) => (props.isMobileMenuOpen ? "block" : "none")};
      transform: ${(props) =>
        props.isMobileMenuOpen ? "translateX(0)" : "translateX(100%)"};
      transition: transform 0.3s ease-in-out;

      ul {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;

        li {
          font-size: 1.5rem;
          color: ${(props) => props.theme.header.color};
        }
      }
    }

    .actions,
    button {
      display: none;
    }
  }
`;

export default HeaderStyle;
