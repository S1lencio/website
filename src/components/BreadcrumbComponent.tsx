import Link from "next/link";
import { Breadcrumb } from "@material-tailwind/react";
import React from "react";
import { usePathname } from "next/navigation";

const BreadcrumbComponent = () => {
    const pathname = usePathname(); // Get current path using usePathname
    const pathSegments = pathname.split("/").filter(Boolean); // Split path by slashes and remove empty segments

    return (
        <Breadcrumb>
            {/* Home link */}
            <Link href="/" className="text-gray-200 hover:text-gray-400 transition-colors text-sm">Home</Link>
            <Breadcrumb.Separator/>

            {/* Dynamically create breadcrumbs based on the current path */}
            {pathSegments.map((segment, index) => {
                const linkPath = "/" + pathSegments.slice(0, index + 1).join("/");

                return (
                    <React.Fragment key={index}>
                        <Link href={linkPath} className="text-gray-200 hover:text-gray-400 text-sm transition-colors">
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </Link>
                        {/* Add separator except after the last item */}
                        {index < pathSegments.length - 1 && <Breadcrumb.Separator/>}
                    </React.Fragment>
                );
            })}
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;
