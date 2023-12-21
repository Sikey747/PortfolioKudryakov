import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./ProjectsCards.scss";
import { Project } from "./../../../../interfaces/index";

interface ProjectsCardsProps extends Omit<Project, "id" | "skill"> {}

function ProjectsCards({ link, img, title }: ProjectsCardsProps) {
    return (
        <article className="projects-cards">
            <Link href={link} className="projects-cards__link">
                <div className="projects-cards__picture -ibg">
                    <Image src={img} alt={title} sizes="100wv" fill />
                </div>
                <h3 className="projects-cards__title">{title}</h3>
            </Link>
        </article>
    );
}

export default ProjectsCards;
