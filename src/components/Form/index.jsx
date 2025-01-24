import React, { forwardRef } from "react";
import Title from "../Title";
import Input from "../Input";
import Textarea from "../Textarea";
import Section from "../Section";
import FormStyle from "./style";
import { useLanguage } from "../../contexts/LanguageContext";

const Form = forwardRef(({ id }, ref) => {

    const { language } = useLanguage()

    const content = {
        pt: {
            title: "Entre em Contato",
            subtitle: "Vamos Trabalhar",
            name: {
                label: "Nome",
            },
            subject: {
                label: "Assunto",
                placeholder: "Ex: Trabalho"
            },
            message: {
                label: "Mensagem",
                placeholder: "Eu quero trabalhar com você!"
            },
            button: "Entre em Contato"

        },
        en: {
            title: "Get In Touch",
            subtitle: "Let's Work",
            name: {
                label: "Name",
            },
            subject: {
                label: "Subject",
                placeholder: "Ex: Work"
            },
            message: {
                label: "Message",
                placeholder: "Ex: I Want to Work with you!"
            },
            button: "Get In Touch"
        }
    }

    return (
        <Section id={id} ref={ref}>
            <Title title={content[language].title} subtitle={content[language].subtitle} />

            <FormStyle>
                <Input
                    label={content[language].name.label}
                    input={{ name: "name", placeholder: "Ex: João Silva" }}
                />
                <Input
                    label={"Email"}
                    type="email"
                    input={{ name: "email", placeholder: "example@email.com" }}
                />

                <Input
                    label={content[language].subject.label}
                    input={{ name: "subject", placeholder: content[language].subject.placeholder }}
                />

                <Textarea
                    label={content[language].message.label}
                    name={"message"}
                    placeholder={content[language].message.placeholder}
                />


                <button>
                {content[language].button}
                </button>

            </FormStyle>
        </Section>
    )
});

export default Form;