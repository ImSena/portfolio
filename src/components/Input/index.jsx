import React from "react";
import InputStyle from "./style";

const Input = ({ label, type = 'text', input }) => {
    return (
        <InputStyle>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                name={input.name}
                placeholder={input.placeholder}
                required
            />
        </InputStyle>
    )
}

export default Input;