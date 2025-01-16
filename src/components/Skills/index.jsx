import React from "react";
import CardSkills from "../CardSkills";
import Title from "../Title";
import Section from "../Section";
import ContainerSkills from "./style";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { CiMicrochip } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";

const Skills = () =>{
    return(
        <Section>
            <Title title={"What I Do"} subtitle={"My Skills"}/>

            <ContainerSkills>
                <CardSkills icone={<FaReact/>} title={"Front-End"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills icone={<SiMysql />} title={"Database"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills icone={<CiMicrochip/>} title={"Iot"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills icone={<FaPhp/>} title={"Backend"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} img={"https://placehold.co/234x218"}/>

                <CardSkills icone={<FaFigma/>} title={"Design UI/UX"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />
            </ContainerSkills>
        </Section>
    )
}

export default Skills;