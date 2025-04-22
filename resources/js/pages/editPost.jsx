import { useForm, usePage } from '@inertiajs/react';

export default function EditPost() {
    const { post, categories } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        title: post.title || '',
        slug: post.slug || '',
        content: post.content || '',
        category_id: post.category_id || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('blog.update', post.id));
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-500">
            <h1 className="text-3xl font-bold mb-8 text-cyan-400">Créer / Modifier un article</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Titre */}
                <div>
                    <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-500">Titre</label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Slug */}
                <div>
                    <label htmlFor="slug" className="block mb-1 text-sm font-medium text-gray-500">Slug</label>
                    <input
                        type="text"
                        id="slug"
                        value={data.slug}
                        onChange={(e) => setData('slug', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.slug && <p className="text-red-400 text-sm mt-1">{errors.slug}</p>}
                </div>

                {/* Contenu */}
                <div>
                    <label htmlFor="content" className="block mb-1 text-sm font-medium text-gray-500">Contenu</label>
                    <textarea
                        id="content"
                        rows="6"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.content && <p className="text-red-400 text-sm mt-1">{errors.content}</p>}
                </div>

                {/* Catégorie */}
                <div>
                    <label htmlFor="category_id" className="block mb-1 text-sm font-medium text-gray-500">Catégorie</label>
                    <select
                        id="category_id"
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        <option value="">Sélectionner une catégorie</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && <p className="text-red-400 text-sm mt-1">{errors.category_id}</p>}
                </div>

                {/* Bouton */}
                <div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Enregistrer les modifications
                    </button>
                </div>
            </form>
        </div>
    );
}
