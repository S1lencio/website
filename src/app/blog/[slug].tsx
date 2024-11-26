import { getPostBySlug, getAllPosts } from "@/utils/loadPosts";
import { useEffect } from "react";
import { remark } from "remark";
import html from "remark-html";

export async function getStaticPaths() {
    const posts = getAllPosts();
    const paths = posts.map((post) => ({ params: { slug: post.slug } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return { props: { post: { ...post, contentHtml } } };
}

export default function PostPage({ post }: { post: any }) {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <article className="prose prose-invert max-w-none">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()}</p>
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
        </div>
    );
}
