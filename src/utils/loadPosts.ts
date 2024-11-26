import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from "next/navigation";

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

export function getAllSlugs() {
    // Read all files in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);

    // Remove the ".md" extension to get the slug
    return fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    // Check if the file exists before trying to read it
    try {
        const fileContents = fs.readFileSync(fullPath, "utf-8")
        const { data, content } = matter(fileContents) // Extract frontmatter and content

        const htmlContent = await remark()
            .use(html)
            .process(content)
        const contentHtml = htmlContent.toString()

        return {
            data,
            content: contentHtml,
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        notFound()
    }
}
