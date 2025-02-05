import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import SliderProject from "../../components/SliderProject/SliderProject";
import ProjectsComponent from "../../components/Projects";
import Form from "../../components/Form"
import Title from "../../components/Title";
import { useLocation, useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { ButtonCta } from "./style";

import project from "../../Projects/projects";


const Projects = () => {
    const { pathname } = useLocation();
    const {id} = useParams();
    const [projectData, setProjectData] = useState({});


    useEffect(() => {
        window.scrollTo(0, 0);

        setProjectData(Object.values(project).flat().find(p => p.id === Number(id)));
    }, [pathname]);

    return (
        <>
            <SliderProject slider={projectData.img.slider}/>

            <Section>

                <Title title={"Titulo do Projeto"} subtitle={"Subtitulo"} />

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ipsa fugiat adipisci laborum doloremque fuga illum ea eligendi natus omnis quam itaque, iure enim, excepturi ipsum aut iste dolor?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ipsa fugiat adipisci laborum doloremque fuga illum ea eligendi natus omnis quam itaque, iure enim, excepturi ipsum aut iste dolor?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ipsa fugiat adipisci laborum doloremque fuga illum ea eligendi natus omnis quam itaque, iure enim, excepturi ipsum aut iste dolor?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ipsa fugiat adipisci laborum doloremque fuga illum ea eligendi natus omnis quam itaque, iure enim, excepturi ipsum aut iste dolor?</p>
                </div>

                <div style={{display: 'flex', gap: '1rem'}}>

                    <ButtonCta href="" target="_blank" className="buttonAction">
                        <BsGithub /> Ver repositório
                    </ButtonCta>

                    <ButtonCta href="" target="_blank" className="buttonAction">
                        <MdRocketLaunch /> Deploy
                    </ButtonCta>
                </div>


            </Section >
            <Form />
            <ProjectsComponent />
        </>
    )
}

export default Projects;