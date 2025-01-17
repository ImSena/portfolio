import styled from 'styled-components';

const CardSkillsStyled = styled.div`
  background: linear-gradient(90deg, ${(props) => props.theme.cardSkills.primary} 0%, ${(props) => props.theme.cardSkills.secondary} 50%, ${(props) => props.theme.cardSkills.thirth} 100%);
  background-blend-mode: overlay;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.cardSkills.border};
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;

  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  h4 {
    color: ${(props) => props.theme.textContent};
    font-size: 1.2rem;
    margin: 1rem 0;
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.paragraph};
    font-weight: 400;
    font-size: 1rem;
  }

  .icon {
    background-color: ${(props)=>props.theme.iconSkills.background};
    border-radius: 0.5625rem;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: ${(props)=>props.theme.iconSkills.color};
    padding: 5px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }


  &.highlight{
    grid-column: span 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .containerImg{
      width: 100%;

      img{
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
    }
    }
  }
`;

export default CardSkillsStyled;