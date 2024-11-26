import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

interface Post {
    slug: string;
    title: string;
    date: string;
}


export function getAllPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, ""); // Remove .md extension
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContents); // Extract frontmatter

        return {
            slug,
            ...data, // Include title and date from frontmatter
        };
    }) as Post[];
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents); // Extract frontmatter and content

    return {
        data,
        content,
    };
}
