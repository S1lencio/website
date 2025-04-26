import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const BreadcrumbComponent = () => {
    const pathname = usePathname(); // Get current path using usePathname
    const pathSegments = pathname.split("/").filter(Boolean); // Split path by slashes and remove empty segments

    return (
        <nav className="flex flex-wrap items-center gap-1 p-1 text-sm">
            {/* Home link */}
            <Link href="/" className="text-gray-200 hover:text-gray-400 transition-colors">Home</Link>
            <Separator />

            {/* Dynamically create breadcrumbs based on the current path */}
            {pathSegments.map((segment, index) => {
                const linkPath = "/" + pathSegments.slice(0, index + 1).join("/");

                return (
                    <React.Fragment key={index}>
                        <Link href={linkPath} className="text-gray-200 hover:text-gray-400 transition-colors">
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </Link>
                        {/* Add separator except after the last item */}
                        {index < pathSegments.length - 1 && <Separator />}
                    </React.Fragment>
                );
            })}
        </nav>
    );
}

const Separator = () => {
    return (
        <span className='inline-block text-gray-400 select-none pointer-events-none mx-1 font-extrabold'>/</span>
    );
}

export default BreadcrumbComponent;
