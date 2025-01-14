import React from "react";
import Button from "../Button";
import Title from "../Title";

const About = ()=>{
    return (
        <section>
            <Title title={"About Me"} subtitle={"Get to Know me"}/>

            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat maxime cupiditate error eius reprehenderit ab! Illum vel sit quibusdam saepe. Illo molestiae odit doloribus necessitatibus nulla, recusandae ipsa facere!
                </p>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsam ullam nihil pariatur minima, odio saepe suscipit dolorem, perferendis rerum deserunt unde distinctio accusamus praesentium. Velit incidunt sapiente inventore modi!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magni reiciendis odio mollitia asperiores iste temporibus!</p>

                <Button title={"Download Resume"}/>
            </div>
        </section>
    );
}

export default About;