import React from "react";

import styled from "styled-components";

const FooterStyle = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1rem;
   width: 100%;

   .container{
    width: 80%;
    
   }

   .email{
        font-size: 1.5rem;
        padding: 1rem;
        display: flex;
        border: 1px solid white;
        justify-content: space-around;
        align-items: center;
   }

   .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0;
    border-bottom: 1px solid white;
   }

   .work{
        font-size: 4rem;
   }

   .bottom{
    margin: 1rem 0;
   }

`;

export default FooterStyle;