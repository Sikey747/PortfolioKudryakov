import React from "react";
import "./Projects.scss";
import ProjectsCards from "./../UI/ProjectsCards/ProjectsCards";
import { Projects as data } from "./../../mocap/mocap";
import { Container } from "./../UI/index";

function Projects() {
    const items = data.reverse().map((el) => {
        return (
            <li key={el.title}>
                <ProjectsCards title={el.title} img={el.img} link={el.link} />
            </li>
        );
    });
    return (
        <section className="projects">
            <Container className="projects__container">
                <h2 className="projects__title">Projects</h2>
                <ul className="projects__projects-cards">{items}</ul>
            </Container>
        </section>
    );
}

export default Projects;
