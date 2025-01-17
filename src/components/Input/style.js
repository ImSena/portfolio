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
   }

   input{
    width: 100%;
    border-radius: 10px;
    height: 70px;
    font-size:1.1rem;
    padding-left: 1rem;
    border: 1px solid #D6DDED;
    background-color: transparent;
    color: #e6e6e6;

    &::placeholder{
        color: #8987A1;
    }
   }
`;

export default InputStyle;