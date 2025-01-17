import React from "react";
import ButtonStyle from "./style";

const Button = (props) => {
    return (
        <ButtonStyle banner={props.banner}>
            <button>
                {props.title}
            </button>
        </ButtonStyle>
    )
}

export default Button;