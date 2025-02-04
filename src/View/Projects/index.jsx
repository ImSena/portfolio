import React, { useEffect } from "react";
import Section from "../../components/Section";
import SliderProject from "../../components/SliderProject/SliderProject";
import ProjectsComponent from "../../components/Projects";
import Form from "../../components/Form"
import Title from "../../components/Title";
import { useLocation } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { ButtonCta } from "./style";


const Projects = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <SliderProject />

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