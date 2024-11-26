import { getPostBySlug } from "@/utils/loadPosts";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    // Fetch the post content and metadata
    const { data, content } = getPostBySlug(slug);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-400 text-sm mb-6">{new Date(data.date).toLocaleDateString()}</p>
            <article className="prose prose-invert max-w-none">
                {content}
            </article>
        </div>
    );
}
