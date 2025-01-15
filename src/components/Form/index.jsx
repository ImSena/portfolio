import React from "react";
import Title from "../Title";
import Input from "../Input";
import Select from "../Select";
import Textarea from "../Textarea";
import Section from "../Section";

const Form = ()=>{

    const service = [
        "Job",
        "Coop",
        "Project"
    ]

    return(
        <Section>
            <Title title={"Get In Touch"} subtitle={"Lets work!"}/>

            <form>
                <Input 
                    label={"Name"} 
                    input={{name: "name", placeholder: "Ex: João Silva" }}
                />
                <Input 
                    label={"Email"}
                    type="email" 
                    input={{name: "email", placeholder: "example@email.com" }}
                />
                
                <Select 
                    label={"Subject"}
                    name={"subject"}
                    option={service}
                />

                <Textarea 
                    label={"Message"}
                    name={"message"}
                />

                <div>
                    <button>
                        Get In Touch
                    </button>
                </div>
            </form>
        </Section>
    )
}

export default Form;