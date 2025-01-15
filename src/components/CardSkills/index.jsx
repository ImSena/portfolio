import React from "react";
import CardSkillsStyled from "./style";

const CardSkills = ({ title, content, img = false, icone }) => {
    return (
        <CardSkillsStyled img={img}>
            <div>
                <div className="icone">
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
                    <div>
                        <img src={img} alt="" />
                    </div>
                )
            }
        </CardSkillsStyled>
    )
}

export default CardSkills;