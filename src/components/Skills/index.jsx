import React from "react";
import CardSkills from "../CardSkills";
import Title from "../Title";
import Section from "../Section";
import ContainerSkills from "./style";

const Skills = () =>{
    return(
        <Section>
            <Title title={"What I Do"} subtitle={"My Skills"}/>

            <ContainerSkills>
                <CardSkills title={"Front-End"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills title={"Database"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills title={"Iot"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills title={"Backend"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} img={"https://placehold.co/234x218"}/>

                <CardSkills title={"Design UI/UX"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />
            </ContainerSkills>
        </Section>
    )
}

export default Skills;