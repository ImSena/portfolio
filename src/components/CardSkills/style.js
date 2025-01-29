import styled from "styled-components";

const CardSkillsStyled = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.cardSkills.primary} 0%,
    ${(props) => props.theme.cardSkills.secondary} 50%,
    ${(props) => props.theme.cardSkills.thirth} 100%
  );
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  h4 {
    color: ${(props) => props.theme.textContent};
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.paragraph};
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
  }

  .icon {
    background-color: ${(props) => props.theme.iconSkills.background};
    border-radius: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: ${(props) => props.theme.iconSkills.color};
  }

  /* Responsividade */
  @media (max-width: 768px) {
    grid-column: 1;
    padding: 1.5rem;
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
    .icon {
      width: 3rem;
      height: 3rem;
      font-size: 1.8rem;
    }

    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default CardSkillsStyled;
