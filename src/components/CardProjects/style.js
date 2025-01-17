import React from "react";

import styled from "styled-components";

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 2.5rem;

    h3{
        color: "#c1c1c1";
        font-size: 1.25rem;
        font-weight: 900;
    }

    p{
        color: "#a9a9a9";
        font-size: 0.875rem;
    }

    .body{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
    }

    .icon{
        border-radius: 50%;
        background-color: #4FC3F7;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        font-size: 1.25rem;
        padding: 1rem;

        a{
            color: white;
        }

        &:hover{
            transform: translateY(-10px);
            transition: transform .4s ease-out;
        }
    }
`;

export default CardStyle;