import styled from "styled-components";

const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto; 
  gap: 1.5rem;
  width: 100%;
  justify-content: center;

  > div {
    grid-column: span 1;
  }

  > .highlight {
    grid-column: span 2;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
    .highlight{
      grid-column: span 1;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .highlight{
      display: flex;
      flex-direction: column;
    }
  }
`;

export default ContainerSkills;
