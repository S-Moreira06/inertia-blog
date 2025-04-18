import { Link, usePage } from '@inertiajs/react';


export default function Blog() {
    const { posts } = usePage().props;

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Tous les articles</h1>

            {posts.map(post => (
                <div key={post.id} className="mb-8 p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="text-gray-500 text-sm mb-2">Catégorie : {post.category?.name}</p>
                    <p>{post.content.substring(0, 100)}...</p>
                </div>
            ))}
        </div>
    );
}
