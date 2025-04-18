import { usePage, Link, router} from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '../hooks/useTransition';

export default function Blog() {
    const { posts, categories, currentCategory } = usePage().props;
    const loading = usePageTransition();

    const handleCategoryChange = (categoryId) => {
        router.visit(`/blog${categoryId ? `?category=${categoryId}` : ''}`, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-4xl font-bold mb-6">Tous les articles</h1>
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
                        className={`px-4 py-2 rounded ${String(currentCategory) === String(category.id) ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-200`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
{/* Affichage des posts + loader(spinner)*/}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <motion.div
                        className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            ) : (
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentCategory || 'all'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1, // ➜ décalage progressif
                                }}
                                className="mb-8 p-4 border rounded shadow"
                            >
                                <h2 className="text-xl font-semibold">
                                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-500 text-sm mb-2">Catégorie : {post.category?.name}</p>
                                <p>{post.content.substring(0, 100)}...</p>
                            </motion.div>
                        ))
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
                </motion.div>
            </AnimatePresence>
            )}
        </div>
    );
}