import React from "react";
import TextareaStyle from "./style";

const Textarea = ({ label, name, placeholder }) => {
    return (


        <TextareaStyle>

            <label htmlFor="">{label}</label>

            <textarea name={name} placeholder={placeholder}></textarea>
        </TextareaStyle>


    );
}

export default Textarea;