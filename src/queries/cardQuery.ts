import { TCard } from '@/types/card';
import { useQuery } from '@tanstack/react-query';

export function useSearchCardQuery({ page = 1, enabled, search }: { page: number; enabled: boolean; search?: string }) {
    const searchParams = new URLSearchParams();
    if (search && search !== '') {
        searchParams.set('search', search);
    }
    searchParams.set('page', page.toString());
    const { data, error } = useQuery({
        queryKey: ['cards', search],
        queryFn: async () => {
            const response = await fetch(`/api/cards?${searchParams.toString()}`);
            return response.json();
        },
        enabled: enabled,
    });

    return {
        cards: data as TCard[],
        isLoading: !error && !data,
        isError: error,
    };
}
