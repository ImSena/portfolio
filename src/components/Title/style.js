import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
       
    h2{
        font-family: "Inter", sans-serif;
        font-weight: 800;
        font-size: 2.8125rem ;
        margin: 0;
    }

    h3{
        margin-top: 0;
        font-weight: bold;
        background: linear-gradient(90deg, #4FC3F7, ${(props) => props.theme.textSubtitle});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }
`;

export default TitleStyle;