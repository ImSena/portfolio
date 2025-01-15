import React from "react";
import ButtonStyle from "./style";

const Button = ({title}) => {
    return (
        <ButtonStyle>
            <button>
                {title}
            </button>
        </ButtonStyle>
    )
}

export default Button;