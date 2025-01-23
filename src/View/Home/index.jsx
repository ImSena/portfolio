import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Form from "../../components/Form";

const Home = ({ sectionRefs, setActiveSection }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);                        
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [sectionRefs, setActiveSection]);

    return (
        <>
            <Banner id="home" ref={(el) => (sectionRefs.current[0] = el)} />
            <About id="about" ref={(el) => (sectionRefs.current[1] = el)} />
            <Skills id="skills" ref={(el) => (sectionRefs.current[2] = el)} />
            <Projects id="projects" ref={(el) => (sectionRefs.current[3] = el)} />
            <Form id="contact" ref={(el) => (sectionRefs.current[4] = el)} />
        </>
    );
};

export default Home;
