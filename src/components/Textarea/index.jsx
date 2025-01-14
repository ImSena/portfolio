import React from "react";

const Textarea = ({ label, name }) => {
    return (

        <div>

            <label htmlFor="">{label}</label>

            <textarea name={name} id=""></textarea>
        </div>

    );
}

export default Textarea;