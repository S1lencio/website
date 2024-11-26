import { getAllSlugs, getPostBySlug } from "@/utils/loadPosts";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    // Fetch all available slugs
    const slugs = await getAllSlugs();

    // Return an array of params objects
    return slugs.map((slug) => ({
        slug,
    }));
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    // Fetch the post content and metadata
    const { data, content } = await getPostBySlug(slug);

    return (
        <div>
            <h1 className="text-2xl">{data.title}</h1>
            <p className="text-gray-400 text-sm mb-6">{new Date(data.date).toLocaleDateString()}</p>

            {/* Horizontal separator */}
            <hr className="my-6 border-t-2 border-neutral-500"/>

            <article className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: content }}/>
            </article>
        </div>
    );
}
