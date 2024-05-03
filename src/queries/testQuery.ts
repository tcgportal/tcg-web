import { QueryClient, useQuery } from '@tanstack/react-query';

type TDefaultQueryOptions = {
	enabled?: boolean;
	staleTime?: number;
	refetchInterval?: number;
};

const fetchFact = async () => {
	const data = await fetch('https://catfact.ninja/fact');
	const fact = await data.json();
	return fact;
};

export async function usePreFetchCatQuery(queryClient: QueryClient) {
	await queryClient.prefetchQuery({
		queryKey: ['cat-fact'],
		queryFn: fetchFact,
	});
}

export function useCatQuery(options: TDefaultQueryOptions = {}) {
	const query = useQuery({
		queryKey: ['cat-fact'],
		queryFn: fetchFact,
		...options,
	});

	return query;
}
