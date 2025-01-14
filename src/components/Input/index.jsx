import React from "react";

const Input = ({label, type = 'text', input})=>{
    return(
        <div>
            <label htmlFor="">{label}</label>
            <input 
                type={type} 
                name={input.name} 
                placeholder={input.placeholder}
                required
            />
        </div>
    )
}

export default Input;