import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    text-align: center;
    margin-top: 4rem;
    margin-bottom:  1rem;
    max-width: 1000px;

    .perfil{
        margin: 1rem 0;
        img{
            border-radius: 100%;
        }
    }

    h2{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 4.0625rem ;
        margin: 0;
    }

    h3{
        margin-top: 0;
        font-weight: bold;
        background: linear-gradient(90deg, #4FC3F7, ${(props) => props.theme.textSubtitle});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }

    p{
        font-size: 1.25rem;
    }
`;

export default BannerStyle;