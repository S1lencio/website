// app/projects/page.tsx
"use client"; // Ensure this is a client-side page

import React from "react";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen text-white">
            <h1 className="text-4xl text-center mt-10">My Projects</h1>
            <div className="flex justify-center mt-10">
                <div className="w-3/5 bg-neutral-700 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">Project 1</h2>
                    <p>Description of Project 1</p>
                </div>
            </div>
        </div>
    );
}
