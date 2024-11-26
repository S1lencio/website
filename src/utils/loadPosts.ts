import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, "utf-8");

        const { data, content } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ""),
            ...data, // Includes frontmatter (title, date, etc.)
            content, // Markdown content
        };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContents);

    return { slug, ...data, content };
}
