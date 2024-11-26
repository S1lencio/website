"use client";

import React from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "./projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-2xl">Me do silly things :3</h1>
            <h2 className="mt-2 font-bold">Here are some of the projects I have worked on.</h2>

            <div className="mt-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
