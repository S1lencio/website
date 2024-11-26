import Link from "next/link";
import { getAllPosts } from "@/utils/loadPosts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-400 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <a className="text-blue-400 hover:text-blue-600">Read More</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
