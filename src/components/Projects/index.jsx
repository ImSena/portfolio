import React, { forwardRef } from "react";
import Title from "../Title";
import TabProjects from "../TabProjects";
import CardProjects from "../CardProjects";
import Section from "../Section";
import ContainerProjects from "./style";

const Projects = forwardRef(({ id }, ref) => {

    return (
        <Section id={id} ref={ref}>
            <Title title={"Projects"} subtitle={"Some of my Work"} />

            <TabProjects />

            <ContainerProjects>

                <CardProjects
                    image={{ path: "https://placehold.co/354x198", title: "Title", alt: "Alt" }}
                    title={"Name Project"}
                    content={"Content"}
                    path={"/project"}
                />

                <CardProjects
                    image={{ path: "https://placehold.co/354x198", title: "Title", alt: "Alt" }}
                    title={"Name Project"}
                    content={"Content"}
                    path={"/project"}
                />

                <CardProjects
                    image={{ path: "https://placehold.co/354x198", title: "Title", alt: "Alt" }}
                    title={"Name Project"}
                    content={"Content"}
                    path={"/project"}
                />

                <CardProjects
                    image={{ path: "https://placehold.co/354x198", title: "Title", alt: "Alt" }}
                    title={"Name Project"}
                    content={"Content"}
                    path={"/project"}
                />

                <CardProjects
                    image={{ path: "https://placehold.co/354x198", title: "Title", alt: "Alt" }}
                    title={"Name Project"}
                    content={"Content"}
                    path={"/project"}
                />

                <CardProjects
                    image={{ path: "https://placehold.co/354x198", title: "Title", alt: "Alt" }}
                    title={"Name Project"}
                    content={"Content"}
                    path={"/project"}
                />

            </ContainerProjects>
        </Section>
    )

});

export default Projects;