import React from "react";
import Title from "../Title";
import TabProjects from "../TabProjects";
import CardProjects  from "../CardProjects";
import Section from "../Section";

const Projects = ()=>{

    return(
        <Section>
            <Title title={"Projects"} subtitle={"Some of my Work"}/>

            <TabProjects />

            <CardProjects 
                image={{path: "https://placehold.co/354x198", title: "Title", alt: "Alt"}}
                title={"Name Project"}
                content={"Content"}
                path={"/project"}
             />
        </Section>
    )

}

export default Projects;