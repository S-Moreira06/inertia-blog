import { usePage, Link, router} from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Blog() {
    const { posts, categories, currentCategory } = usePage().props;

    const handleCategoryChange = (categoryId) => {
        router.visit(`/blog${categoryId ? `?category=${categoryId}` : ''}`, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Tous les articles</h1>
{/* Onglets pour les catégories */}
            <div className="mb-6 flex space-x-4">
                <button // Onglet "Toutes les catégories"
                    onClick={() => handleCategoryChange(null)} 
                    className={`px-4 py-2 rounded ${!currentCategory ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-200`}
                >
                    Toutes les catégories
                </button>

                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`px-4 py-2 rounded ${currentCategory === category.id ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-200`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
{/* Affichage des posts */}
<AnimatePresence mode="wait">
                {posts.length > 0 ? (
                    <motion.div
                        key={currentCategory || 'all'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
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
                    </motion.div>
                ) : (
                    <motion.p
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-500"
                    >
                        Aucun post trouvé dans cette catégorie.
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}