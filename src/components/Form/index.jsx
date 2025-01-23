import React, { forwardRef } from "react";
import Title from "../Title";
import Input from "../Input";
import Textarea from "../Textarea";
import Section from "../Section";
import FormStyle from "./style";

const Form = forwardRef(({ id }, ref) => {

    return (
        <Section id={id} ref={ref}>
            <Title title={"Get In Touch"} subtitle={"Lets work!"} />

            <FormStyle>
                <Input
                    label={"Name"}
                    input={{ name: "name", placeholder: "Ex: João Silva" }}
                />
                <Input
                    label={"Email"}
                    type="email"
                    input={{ name: "email", placeholder: "example@email.com" }}
                />

                <Input
                    label={"Subject"}
                    name={"subject"}
                    input={{ name: "subject", placeholder: "Ex: Work" }}
                />

                <Textarea
                    label={"Message"}
                    name={"message"}
                    placeholder={"Ex: I Want to Work with you!"}
                />


                <button>
                    Get In Touch
                </button>

            </FormStyle>
        </Section>
    )
});

export default Form;