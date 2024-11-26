import Link from "next/link";
import { getAllPosts } from "@/utils/loadPosts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div>
            <h1 className="text-2xl mb-6">Blog</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.slug} className="bg-neutral-800 p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()}</p>
                        <Link href={`/blog/${post.slug}`} className="text-indigo-500 hover:text-indigo-600 transition-colors">
                            Read More
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
