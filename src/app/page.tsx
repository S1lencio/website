"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1 className="text-2xl">Hello there :3</h1>
            <h2 className="mt-2">
                I am Silencio, a young and naive programmer from Germany who will retreat to the backend upon spotting a
                css class.
                Its nice to meet you! On this page you will find various random things I have done over the years. Enjoy
                your stay!
            </h2>

            <h2 className="mt-8">
                You might want to look through my <Link href="/projects"
                                                        className="text-indigo-500 hover:text-indigo-600 transition-colors">projects</Link>.
            </h2>
            <h2>
                If you want to contact me, check out the <Link href="/contact"
                                                               className="text-indigo-500 hover:text-indigo-600 transition-colors">contact</Link> page.
            </h2>
            <h2>
                I have a <Link href="/blog"
                               className="text-indigo-500 hover:text-indigo-600 transition-colors">blog</Link>, because
                of
                course I do.
            </h2>

            <h2 className="mt-8">
                This page will grow and evolve alongside myself over time, and I have a lot of time to spend on useless
                and irrelevant projects.
            </h2>
        </div>
    );
}
