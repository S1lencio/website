"use client";

import React from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "./projects";

export default function ProjectsPage() {
    return (
        <div>
            <h1 className="text-2xl">Me do silly things :3</h1>
            <p className="mt-2">Here are some of the projects I have worked on.</p>

            <div className="mt-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
