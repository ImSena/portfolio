import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    text-align: center;
    margin-top: 8rem;
    margin-bottom:  1rem;
    max-width: 1000px;

    .perfil{
        margin: 1rem 0;
        img{
            border-radius: 100%;
            width: 340px;
            box-shadow: 0px 1px 10px #00000066;
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

    @media (max-width: 768px) {
        margin-top: 6rem;

        h2{
            font-size: 3.0625rem;
        } 

        .perfil{
            img{
                width: 200px;
            }
        }

  
    }

`;

export default BannerStyle;