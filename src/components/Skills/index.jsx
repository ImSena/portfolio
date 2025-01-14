import React from "react";
import CardSkills from "../CardSkills";
import Title from "../Title";

const Skills = () =>{
    return(
        <section>
            <Title title={"What I Do"} subtitle={"My Skills"}/>

            <div>
                <CardSkills title={"Front-End"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills title={"Back-end"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills title={"DataBase"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />

                <CardSkills title={"IoT"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} img={"https://placehold.co/234x218"}/>

                <CardSkills title={"Design UI/UX"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum error, rem incidunt laudantium corporis soluta quae obcaecati reprehenderit accusantium eos eligendi!"} />
            </div>
        </section>
    )
}

export default Skills;