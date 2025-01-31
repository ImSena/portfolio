import React from "react";

import styled from "styled-components";

const ContainerProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1.25rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
            width: 100%;
        }
    }

`;

export default ContainerProjects;