import { Link, usePage } from '@inertiajs/react';

export default function Post() {
    const { post } = usePage().props;

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-4">Catégorie : {post.category?.name}</p>
            <div className="prose">{post.content}</div>
            <div className="mt-6">
                <Link href="/blog" className="text-blue-600 hover:underline">
                    ← Retour à la liste des articles
                </Link>
            </div>
        </div>
    );
}
