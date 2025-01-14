import React from "react";

const CardSkills = ({title, content, img = false})=>{
    return(
        <div>
            <div>
                icone
            </div>

            <div>
                <h4>{title}</h4>
            </div>

            <div>
                <p>
                    {content}
                </p>
            </div>

            {
                img && (
                    <div>
                        <img src={img} alt="" />
                    </div>
                )
            }
        </div>
    )
}

export default CardSkills;