import React from "react";
import CardSkillsStyled from "./style";

const CardSkills = ({ title, content, img = false, icone }) => {
    return (
        <CardSkillsStyled img={img} className={`${img ? "highlight" : ""}`}>
            <div>
                <div className="icon">
                    {icone}
                </div>

                <div>
                    <h4>{title}</h4>
                </div>

                <div>
                    <p>
                        {content}
                    </p>
                </div>
            </div>

            {
                img && (
                    <div className="containerImg">
                        <img src={img} alt="" />
                    </div>
                )
            }
        </CardSkillsStyled>
    )
}

export default CardSkills;