import React, { forwardRef, useContext } from "react";
import Button from "../Button";
import BannerStyle from "../Banner/style.js";
import Section from "../Section";
import { useLanguage } from "../../contexts/LanguageContext.jsx";

const Banner = forwardRef(({ id }, ref) => {

    const {language} = useLanguage();

    const content = {
        pt: {
            h2: "Eu sou o Bruno Sena",
            h3: "Desenvolvedor FullStack",
            content: "Transformo ideias em soluções digitais completas. Especialista no desenvolvimento de aplicações web, mobile e APIs robustas, trabalho com tecnologias modernas como Node.js, React Native, React.js, PHP e Python.",
            button: "Contate-me"
        },
        en:{
            h2: "I'm Bruno Sena",
            h3: "Development Fullstack",
            content: "I turn ideas into complete digital solutions. Specializing in the development of web, mobile applications, and robust APIs, I work with modern technologies such as Node.js, React Native, React.js, PHP, and Python.",
            button: "Contact Me"
        }
    }
    
    return (
        <Section id={id} ref={ref}>
            <BannerStyle>
                <div>
                    <div className="perfil">
                        <img src="https://placehold.co/202x197" alt="Bruno's Image" />
                    </div>
                    <div>
                        <h2>{content[language].h2}</h2>
                        <h3>{content[language].h3}</h3>
                    </div>
                </div>

                <div>
                    <p>
                    {content[language].content}
                    </p>
                </div>

                <Button banner={true} title={content[language].button} />
            </BannerStyle>
        </Section>
    );
});

export default Banner;
