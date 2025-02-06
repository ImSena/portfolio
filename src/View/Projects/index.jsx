import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import SliderProject from "../../components/SliderProject/SliderProject";
import ProjectsComponent from "../../components/Projects";
import Form from "../../components/Form"
import Title from "../../components/Title";
import { useLocation, useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { ButtonCta, ContainerParagraph } from "./style";

import project from "../../Projects/projects";
import { useLanguage } from "../../contexts/LanguageContext";


const Projects = () => {
    const { language } = useLanguage();
    const { pathname } = useLocation();
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProject = Object.values(project)
            .flat()
            .find(p => p.id === Number(id));

        if (foundProject) {
            setProjectData(foundProject);
        } else {
            setProjectData(null);
        }
    }, [pathname, id]);

    if (!projectData) return <p>Projeto não encontrado.</p>;

    return (
        <>
            {projectData.img?.slider && <SliderProject slider={projectData.img.slider} />}

            <Section>
                <Title title={projectData.title[language]} subtitle={projectData.subtitle[language]} />

                <ContainerParagraph>
                    {projectData.paragraph[language].map((text, index)=>(
                        <p key={index} dangerouslySetInnerHTML={{__html: text}}></p>
                    ))}
                </ContainerParagraph>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    {projectData.github && (
                        <ButtonCta href={projectData.github} target="_blank" className="buttonAction">
                            <BsGithub /> Ver repositório
                        </ButtonCta>
                    )}

                    {projectData.deploy && (
                        <ButtonCta href={projectData.deploy} target="_blank" className="buttonAction">
                            <MdRocketLaunch /> Deploy
                        </ButtonCta>
                    )}
                </div>
            </Section>

            <Form />
            <ProjectsComponent />
        </>
    );
};


export default Projects;