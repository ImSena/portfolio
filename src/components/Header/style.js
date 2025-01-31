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

  @media (min-width: 1440px) {
    .mobile-menu{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 75%;
      gap: 5rem;

      &ul{
        list-style: none;
        display: flex;
        gap: 5rem;
        justify-content: space-evenly;
      }

      .mobile-footer{
        display: flex;
        gap: 2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 7rem;
    .mobile-menu{

      ul{
        list-style: none;
        display: flex;
        gap: 5rem;
        margin-left: 6rem;
        margin-right: 6rem;
      }

      button{
        display: none;
      }

      .mobile-footer{
        display: flex;
        gap: 1rem;
        margin-right: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;

    .hamburger {
      display: block;
    }

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      backdrop-filter: blur(10px); /* Efeito vidro */
      background: ${(props) => props.theme.header.mobile.backdrop};
      display: ${(props) => (props.isMobileMenuOpen ? "block" : "none")};
      z-index: 900;
    }

    nav.mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 60%;
      background-color: ${(props) => props.theme.header.mobile.background};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: ${(props) =>
    props.isMobileMenuOpen ? "translateX(0)" : "translateX(100%)"};
      transition: transform 0.3s ease-in-out;
      z-index: 1000;
      padding: 2rem;
    }

    nav.mobile-menu ul {
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 0;
    }

    .mobile-footer {
      display: flex;
      padding: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      justify-content: center;
      align-items: center;
      gap: 4rem;
      margin-right: 0px !important;
      width: 100%;
    }

    .actions,
    button {
      display: none;
    }
  }
`;

export default HeaderStyle;
