import React from "react";

import styled from "styled-components";

const TextareaStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   gap: 1rem;
   width: 100%;

   label{
    font-weight: bold;
   }

   textarea{
    width: 100%;
    border-radius: 10px;
    font-size:1.1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    border: 1px solid ${(props)=>props.theme.form.border};
    background-color: transparent;
    color: ${(props)=>props.theme.form.label};
    height: 10rem;
    resize: none;
    font-family: 'Inter', sans-serif;

    &::placeholder{
        color: ${(props)=>props.theme.form.placeholder};
    }
   }
`;

export default TextareaStyle;