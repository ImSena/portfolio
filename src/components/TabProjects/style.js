import React from "react";

import styled from "styled-components";

const TabStyle = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;

    button{
        border-radius: 3.125rem;
        font-size: 1rem;
        padding: 1rem 2rem;
        border: 1px solid ${(props) => props.theme.buttonTab.border};
        color: ${(props) => props.theme.buttonTab.color};
        background-color: transparent;

        &.active{
            border: 1px solid ${(props) => props.theme.buttonTab.border};
            color: ${(props) => props.theme.buttonTab.colorActive};
            background-color: ${(props) => props.theme.buttonTab.background};
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
        gap: 1rem;
    }
`;

export default TabStyle;