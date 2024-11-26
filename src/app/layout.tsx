"use client";

import React from "react";
import "../styles/globals.css";
import {Breadcrumb} from "@material-tailwind/react";
import { usePathname  } from "next/navigation";

export default function RootLayout({ children } : { children: React.ReactNode }) {
    const pathname = usePathname(); // Get current path using usePathname
    const pathSegments = pathname.split("/").filter(Boolean); // Split path by slashes and remove empty segments

    return (
        <html lang="en">
        <head>
            <title>{'Silly Site'}</title>
            <meta name="description" content={'My homepage'} />
        </head>
        <body>
        {/* Outer container to center content */}
        <div className="flex min-h-screen bg-neutral-900">
            {/* Left gradient block */}
            <div className="w-1/5 bg-gradient-to-r from-zinc-800 to-neutral-900 to-90%"></div>

            {/* Middle solid color block */}
            <div className="w-3/5 bg-neutral-700 p-6 rounded-t-md mt-10">
                {/* Breadcrumbs at the top */}
                <Breadcrumb>
                    {/* Home link */}
                    <Breadcrumb.Link href="/" className="text-gray-200">Home</Breadcrumb.Link>
                    <Breadcrumb.Separator />

                    {/* Dynamically create breadcrumbs based on the current path */}
                    {pathSegments.map((segment, index) => {
                        const linkPath = "/" + pathSegments.slice(0, index + 1).join("/");

                        return (
                            <React.Fragment key={index}>
                                <Breadcrumb.Link href={linkPath} className="text-gray-200">
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize first letter */}
                                </Breadcrumb.Link>
                                {index < pathSegments.length - 1 && <Breadcrumb.Separator />} {/* Add separator except after the last item */}
                            </React.Fragment>
                        );
                    })}
                </Breadcrumb>
                {/* Child container */}
                <div className="text-gray-200 p-6">{children}</div>
            </div>

            {/* Right gradient block */}
            <div className="w-1/5 bg-gradient-to-r from-neutral-900 from-10% to-zinc-800"></div>
        </div>
        </body>
        </html>
    );
}

