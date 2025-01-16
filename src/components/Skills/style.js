import styled from "styled-components";

const ContainerSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 1.5rem;
    width: 100%;
    justify-content: center;

    > div {
    grid-column: span 1;
  }
`;

export default ContainerSkills;