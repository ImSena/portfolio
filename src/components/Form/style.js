import React from "react";

import styled from "styled-components";

const FormStyle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;

    button{
        margin: 1rem 0;
        width: 100%;
        font-size: 1rem;
        font-weight: 900;
        border-radius: 10px;
        height: 62px;
        background-color: ${(props)=>props.theme.form.button.background};
        color: ${(props)=>props.theme.form.button.color};
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export default FormStyle;