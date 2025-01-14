import React from "react";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Form from "../../components/Form";

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Form />
        </>
    )
}

export default Home;