import styled from 'styled-components';

const CardSkillsStyled = styled.div`
  background: linear-gradient(90deg, #1c1c1c80, #050505);
  border-radius: 1rem;
  border: 1px solid #2B2B2B;
  width: 300px;
  margin: 1rem;
  padding: 2rem;
  text-align: center;
  position: relative; // For absolute positioning of icon

  h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #aaa;
    font-size: 1rem;
  }

  .icon {
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: #fff;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }
`;