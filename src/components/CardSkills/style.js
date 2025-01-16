import styled from 'styled-components';

const CardSkillsStyled = styled.div`
  background: linear-gradient(90deg, #1C1C1C 0%, #121212 50%, #050505 100%);
  background-blend-mode: overlay;
  border-radius: 1rem;
  border: 1px solid #2B2B2B;
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
    color: #fff;
    font-size: 1.2rem;
    margin: 1rem 0;
    font-weight: 900;
  }

  p {
    color: #e1e1e1;
    font-weight: 300;
    font-size: 1rem;
  }

  .icon {
    background-color: #F5F8FF;
    border-radius: 0.5625rem;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: #1a1a1a;
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