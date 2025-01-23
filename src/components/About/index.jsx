import React, { forwardRef } from "react";
import Button from "../Button";
import Title from "../Title";
import Section from '../Section';
import { useLanguage } from "../../contexts/LanguageContext";

const About = forwardRef(({ id }, ref) => {

    const { language } = useLanguage();

    const content = {
        pt: {
            title: "Sobre",
            subtitle: "Saiba Mais sobre mim",
            pt1: "Sou um desenvolvedor apaixonado por tecnologia, com sólida formação técnica em Desenvolvimento de Sistemas e atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP, uma das melhores faculdades de tecnologia do Brasil.",
            pt2: "Tenho experiência em várias linguagens e frameworks como PHP, React, React Native, Node.js, Python, Java e, mais recentemente, me aprofundo em modelagem de banco de dados utilizando ferramentas como o Oracle Data Modeler.",
            pt3: "Também gosto de criar protótipos no Figma, sempre buscando representar visualmente minhas ideias e soluções.",
            pt4: "Tenho um grande interesse em aprender constantemente sobre novas tecnologias, frameworks e ferramentas para me manter atualizado e oferecer as melhores soluções aos meus projetos.",
            pt5: "Meu objetivo é continuar evoluindo como desenvolvedor e contribuir com projetos inovadores no mercado de tecnologia.",
            button: "Baixar Resumo"
        },
        en: {
            title: "About",
            subtitle: "Get to Know me",
            pt1: "I am a developer passionate about technology, with a solid technical background in Systems Development and currently pursuing Analysis and Systems Development at FIAP, one of the best technology universities in Brazil.",
            pt2: "I have experience with several languages and frameworks such as PHP, React, React Native, Node.js, Python, Java, and more recently, I am delving into database modeling using tools like the Oracle Data Modeler.",
            pt3: "I also enjoy creating prototypes in Figma, always aiming to visually represent my ideas and solutions.",
            pt4: "I have a strong interest in constantly learning new technologies, frameworks, and tools to stay up-to-date and offer the best solutions for my projects.",
            pt5: "My goal is to continue evolving as a developer and contribute to innovative projects in the tech market.",
            button: "Download Resume"
        }
    };

    return (
        <Section id={id} ref={ref}>
            <Title title={content[language].title} subtitle={content[language].subtitle} />

            <div>
                {Object.entries(content[language]).map(([key, text])=>(
                    key !== 'title' && key !== "subtitle" && key !== 'button' && (
                        <p key={key}>{text}</p>
                    )
                ))}
            </div>

            <Button title={content[language].button} />
        </Section>
    );
});

export default About;