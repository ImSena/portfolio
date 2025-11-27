import React, { forwardRef, useRef, useState } from "react";
import Title from "../Title";
import Input from "../Input";
import Textarea from "../Textarea";
import Section from "../Section";
import FormStyle from "./style";
import { useLanguage } from "../../contexts/LanguageContext";
import { toast } from "react-toastify";


const Form = forwardRef(({ id }, ref) => {

    const formRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);

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
            button: "Entre em Contato",
            email: {
                success: "E-mail enviado com sucesso! Em breve entro em contato!",
                error: "Erro ao enviar o e-mail. Por favor, tente novamente."
            },
            errors: {
                required: "Preencha todos os campos.",
                email: "O e-mail informado é inválido."
            }
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
            button: "Get In Touch",
            email: {
                success: "Email sent successfully! I'll be in touch soon!",
                error: "Error sending email. Please try again."
            },
            errors: {
                required: "Please fill all fields.",
                email: "Invalid email format."
            }
        }
    }

    const sendForm = async () => {
        try {
            setIsLoading(true);
            const form = formRef.current;
            const formData = new FormData(form);

            const data = Object.fromEntries(formData.entries());

            if (!validateForm(data)) {
                setIsLoading(false);
                return;
            }

            const response = await fetch("https://mail.corecode.com.br/api/send-email.php", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error("Erro no servidor");
            }

            const result = await response.json();

            console.log(result);

            if (result.status !== "ok") {
                throw new Error("Falha ao enviar email");
            }


            toast.success(content[language].email.success);

            form.reset();
        } catch (error) {
            toast.error(content[language].email.error)
        } finally {
            setIsLoading(false);
        }

    }

    const validateForm = (data) => {
        const { name, email, whats, subject, message } = data;

        if (!name || !email || !whats || !subject || !message) {
            toast.error(content[language].errors.required);
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error(content[language].errors.email);
            return false;
        }

        return true;
    };

    return (
        <Section id={id} ref={ref}>
            <Title title={content[language].title} subtitle={content[language].subtitle} />

            <FormStyle
                ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    sendForm();
                }}>
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
                    label={"WhatsApp"}
                    type="text"
                    input={{ name: "whats", placeholder: "Ex: (11) 99999-9999" }}
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


                <button disabled={isLoading}>
                    {isLoading ? "Enviando..." : content[language].button}
                </button>

            </FormStyle>
        </Section>
    )
});

export default Form;