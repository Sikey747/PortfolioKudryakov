import React from "react";
import "./Skill.scss";
import { Container } from "./../UI/index";
import Button from "./../UI/Button/Button";

function Skill() {
    return (
        <section className="skills">
            <Container className="skills__container">
                <h1 className="skills__title">Skills</h1>
                <h2 className="skills__sub-title">Frontend</h2>
                <p className="skills__text">
                    HTML5, CSS3, SCSS, Flexbox, Grid, BEM, Tailwind, Git,React, Next.js,Redux
                    Toolkit, Zustand,JavaScript, TypeScript,MUI, DaisyUI, NextUI, Bootstrap REST
                    API, Axios, TanStack Query, RTK Query Prisma Figma, Photoshop Git, ESLint, Vite,
                    Gulp, ClickUp, Jira React Select, Framer Motion, Next Auth, React-Hot-Toast,
                    clsx, moment, zod, React Hook Form, Swiper, React Router
                </p>
                <h2 className="skills__sub-title">Soft Skills</h2>
                <p className="skills__text">
                    Communication, Adaptability, Work in a team, Time management, Confidentiality,
                    Customer service culture, Compliance with norms and standards
                </p>
                <a href="KudryakovCV.pdf" download={"KudryakovCV.pdf"}>
                    <Button className="button button__primary">Download my CV</Button>
                </a>
            </Container>
        </section>
    );
}

export default Skill;
