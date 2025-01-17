import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 1rem 0;

    button{
        font-size: 1rem;
        background-color: transparent;
        border-color: ${(props) => props.theme.buttonCta.border};
        color: ${(props) => props.banner ? props.theme.buttonCta.colorBanner : props.theme.buttonCta.color};
        padding: 1rem 2rem;
        border-radius: 75px;
    }
`;

export default ButtonStyle;