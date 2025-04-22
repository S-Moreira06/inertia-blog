import { useForm, usePage} from '@inertiajs/react';

export default function CreatePost() {
        const { categories, mainErrors } = usePage().props;
    
    const { data, setData, post, processing, errors } = useForm({
        title: 'Article de démonstration',
        slug: '',
        content: 'Contenu de démonstration',
        category_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('blog.store'));
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-500">
            <h1 className="text-3xl font-bold mb-8 text-cyan-400">Créer un nouvel article</h1>
            {errors && Object.keys(errors).length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <strong>Oups !</strong> Il y a {Object.keys(errors).length} erreur(s) :
                    <ul className="mt-2 list-disc list-inside">
                        {Object.values(errors).map((error, i) => (
                            <li key={i}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Titre */}
                <div>
                    <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-300">Titre</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Slug */}
                <div>
                    <label htmlFor="slug" className="block mb-1 text-sm font-medium text-gray-300">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        id="slug"
                        value={data.slug}
                        onChange={(e) => setData('slug', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.slug && <p className="text-red-400 text-sm mt-1">{errors.slug}</p>}
                </div>

                {/* Contenu */}
                <div>
                    <label htmlFor="content" className="block mb-1 text-sm font-medium text-gray-300">Contenu</label>
                    <textarea
                        name="content"
                        id="content"
                        rows="6"
                        required
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.content && <p className="text-red-400 text-sm mt-1">{errors.content}</p>}
                </div>

                {/* Catégorie */}
                <div>
                    <label htmlFor="category_id" className="block mb-1 text-sm font-medium text-gray-300">Catégorie</label>
                    <select
                        name="category_id"
                        id="category_id"
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        required
                        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        <option value="">-- Choisir une catégorie --</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
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
                        Publier l'article
                    </button>
                </div>
            </form>
        </div>
    );
}
