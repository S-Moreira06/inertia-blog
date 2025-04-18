import { Button } from "@/components/ui/button"
import { router } from "@inertiajs/react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold">Bienvenue sur le blog test d'Inertia</h1>
            <p className="mt-4 text-lg">Dans ce blog nous alons utiliser Inertia avec Laravel et React</p>
            <Button onClick={() => router.visit('/blog')} variant="outline">
                Aller au blog
            </Button>
        
        </div>
    );
}