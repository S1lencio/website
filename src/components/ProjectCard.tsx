import React from "react";
import Link from "next/link";

const linkTypeLabels: { [key: string]: string } = {
    github: "GitHub",
    modrinth: "Modrinth",
    spigot: "Spigot",
    demo: "Live Demo",
    docs: "Documentation",
    blog: "Blog Post",
};

const langaugeLabels: { [key: string]: string } = {
    python: "",
    java: "",
    javascript: "",
    typescript: "",
    nextjs: "",
    nestjs: "",
}

interface ProjectProps {
    title: string;
    language: string,
    description: string;
    links: { url: string; type: string }[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, links, language }) => {
    const lang = langaugeLabels[language] || ""; // Get the label based on the language

    return (
        <div className="bg-neutral-800 p-6 rounded-lg shadow-md mb-4">
            <div className="text-xl">
                <span className="font-semibold">{title}</span>
                <span title={language} className="ml-4 text-indigo-500">{lang}</span>
            </div>
            <p className="mt-2">{description}</p>
            <div className="mt-4">
                {links.map((link, index) => {
                    const label = linkTypeLabels[link.type] || "Link"; // Get the label based on the link type

                    return (
                        <span key={index} className="mr-4">
                        <span className="text-gray-400">[ </span>
                            {link.url.startsWith("/") ? (
                                // Internal link using Next.js Link
                                <Link href={link.url} className="text-white hover:underline">
                                    {label}
                                </Link>
                            ) : (
                                // External link using <a> tag
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:underline"
                                >
                                    {label}
                                </a>
                            )}
                            <span className="text-gray-400"> ]</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectCard;
