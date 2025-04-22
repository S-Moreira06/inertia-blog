import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Link href="/" className="text-2xl font-semibold hover:text-blue-200">
                        Blog Inertia
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="space-x-6">
                    <Link href="/" className="text-lg hover:text-blue-200">
                        Accueil
                    </Link>
                    <Link href="/blog" className="text-lg hover:text-blue-200">
                        Blog
                    </Link>
                    <Link href="/blog/create" className="text-lg hover:text-blue-200">
                    Créer un article
                    </Link>
                    {/* Ajouter d'autres liens ici */}
                </nav>
            </div>
        </header>
    );
}
