import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

export function usePageTransition() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => setLoading(true);
        const finish = () => setLoading(false);

        router.on('start', start);
        router.on('finish', finish);

        let isMounted = true;

        return () => {
            isMounted = false;
        };
    }, []);

    return loading;
}
