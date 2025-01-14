import React from "react";

const Select = ({ label, name, option }) => {
    return (

        <div>

            <label htmlFor="">{label}</label>

            <select name={name} required>
                <option value="" hidden Select>Select a Subject</option>

                {
                    option.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))
                }
            </select>
        </div>

    );
}

export default Select;