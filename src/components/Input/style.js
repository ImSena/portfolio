import React from "react";

import styled from "styled-components";

const InputStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   gap: 1rem;
   width: 100%;

   label{
    font-weight: bold;
    color: ${(props)=>props.theme.form.label};
   }

   input{
    width: 100%;
    border-radius: 10px;
    height: 70px;
    font-size:1.1rem;
    padding-left: 1rem;
    border: 1px solid ${(props)=>props.theme.form.border};
    background-color: transparent;
    color: ${(props)=>props.theme.form.label};

    &::placeholder{
        color: ${(props)=>props.theme.form.placeholder};
    }
   }
`;

export default InputStyle;