import React, { forwardRef, useState } from "react";
import Title from "../Title";
import TabProjects from "../TabProjects";
import CardProjects from "../CardProjects";
import Section from "../Section";
import ContainerProjects from "./style";
import projects from "../../Projects/projects";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = forwardRef(({ id }, ref) => {

    const { language } = useLanguage()

    const content = {
        pt: {
            title: "Projetos",
            subtitle: "Alguns dos meus trabalhos"
        },
        en: {
            title: "Projects",
            subtitle: "Some of my Work"
        }
    }

    const [activeTab, setActiveTab] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const tabs = ["All", ...Object.keys(projects)];

    const filteredProjects = activeTab === "All" ?
        Object.values(projects).flat() :
        projects[activeTab];

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    return (
        <Section id={id} ref={ref}>
            <Title title={content[language].title} subtitle={content[language].subtitle} />

            <TabProjects tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} setVisibleCount={setVisibleCount} />

            <ContainerProjects>
                {
                    visibleProjects.map((project) => (
                        <CardProjects
                            key={project.id}
                            image={project.img}
                            title={project.title[language]}
                            content={project.content[language]}
                            path={`/project/${project.id}`}
                        />
                    ))
                }
            </ContainerProjects>

            {visibleCount < filteredProjects.length ? (
                <button onClick={() => setVisibleCount(filteredProjects.length)}>
                    Ver mais
                </button>
            ) :
                visibleCount > 6 && (
                    <button onClick={() => setVisibleCount(6)}>
                        Ver menos
                    </button>
                )
            }
        </Section>
    )

});

export default Projects;