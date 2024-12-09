import React from "react";

const linkTypeLabels: { [key: string]: string } = {
    github: "GitHub",
    modrinth: "Modrinth",
    spigot: "Spigot",
    demo: "Live Demo",
    docs: "Documentation",
    blog: "Blog Post",
};

interface ProjectProps {
    title: string;
    description: string;
    links: { url: string; type: string }[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, links }) => {
    return (
        <div className="bg-neutral-800 p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
            <div className="mt-4">
                {links.map((link, index) => {
                    const label = linkTypeLabels[link.type] || "Link"; // Get the label based on the link type

                    return (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            {/* Render the brackets with a different color */}
                            <span className="text-gray-400">[ </span>
                            <span className="text-white hover:underline">{label}</span>
                            <span className="text-gray-400"> ]</span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectCard;
