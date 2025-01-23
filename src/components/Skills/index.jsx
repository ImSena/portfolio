import React, { forwardRef } from "react";
import CardSkills from "../CardSkills";
import Title from "../Title";
import Section from "../Section";
import ContainerSkills from "./style";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

const Skills = forwardRef(({ id }, ref) => {

    const {language} = useLanguage();

    const content = {
        pt: {
            title: "O que eu faço",
            subtitle: "Minhas Habilidades",
            front: "Desenvolvo interfaces interativas e dinâmicas com React, HTML5 e CSS3, criando experiências ricas e responsivas, otimizando a performance e garantindo a acessibilidade para todos os usuários.",
            database: "Trabalho com modelagem de banco de dados, otimizando consultas e criando soluções escaláveis com SQL e NoSQL, além de aplicar boas práticas para garantir integridade e segurança dos dados.",
            mobile: "Desenvolvo aplicativos móveis com React Native, criando experiências nativas e otimizadas para iOS e Android, sempre com foco na performance, usabilidade e design responsivo.",
            backend: "Crio APIs robustas e eficientes com Node.js e PHP, garantindo escalabilidade e segurança no backend, além de implementar autenticação, autorização e testes automatizados.",
            design: "Crio protótipos e interfaces intuitivas no Figma, sempre focando na experiência do usuário e na facilidade de uso, com atenção ao design responsivo e acessibilidade em dispositivos móveis e desktop."
        }, 
        en: {
            title: "What I Do",
            subtitle: "My Skills",
            front: "I build interactive and dynamic interfaces with React, HTML5, and CSS3, creating rich and responsive experiences, optimizing performance and ensuring accessibility for all users.",
            database: "I work with database modeling, optimizing queries, and creating scalable solutions with SQL and NoSQL, applying best practices to ensure data integrity and security.",
            mobile: "I develop mobile apps with React Native, creating native and optimized experiences for iOS and Android, always focusing on performance, usability, and responsive design.",
            backend: "I build robust and efficient APIs with Node.js and PHP, ensuring scalability and security on the backend, implementing authentication, authorization, and automated tests.",
            design: "I create prototypes and intuitive interfaces in Figma, always focusing on user experience and ease of use, with attention to responsive design and accessibility on mobile and desktop devices."
        }
    };
    
    return(
        <Section id={id} ref={ref}>
            <Title title={content[language].title} subtitle={content[language].subtitle}/>

            <ContainerSkills>
                <CardSkills icone={<FaReact/>} title={"Front-End"} content={content[language].front} />

                <CardSkills icone={<SiMysql />} title={"Database"} content={content[language].database} />

                <CardSkills icone={<SiExpo />} title={"Mobile"} content={content[language].mobile} />

                <CardSkills icone={<FaPhp/>} title={"Backend"} content={content[language].backend} img={"https://placehold.co/234x218"}/>

                <CardSkills icone={<FaFigma/>} title={"Design UI/UX"} content={content[language].design} />
            </ContainerSkills>
        </Section>
    )
});

export default Skills;