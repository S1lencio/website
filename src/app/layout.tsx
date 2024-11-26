import React from "react";
import "../styles/globals.css";

export const metadata = {
    title: 'Silly Site',
    description: 'My homepage',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body className="min-h-screen text-white">
        {/* Outer container to center content */}
        <div className="flex min-h-screen bg-neutral-900">
            {/* Left gradient block */}
            <div className="w-1/5 bg-gradient-to-r from-zinc-800 to-neutral-900 to-90%"></div>

            {/* Middle solid color block */}
            <div className="w-3/5 bg-neutral-700 p-6 rounded-lg mt-10">
                {/* Child container now inherits the background */}
                <div className="p-6">{children}</div>
            </div>

            {/* Right gradient block */}
            <div className="w-1/5 bg-gradient-to-r from-neutral-900 from-10% to-zinc-800"></div>
        </div>
        </body>
        </html>
    );
}

