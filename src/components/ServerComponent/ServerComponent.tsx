import { usePreFetchCatQuery } from '@/queries/testQuery';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import CatFact from './CatFact';
import { getQueryClient } from '@/queries/queryBase';

export default async function CatFactServerComponent() {
	const queryClient = getQueryClient({ refetchInterval: 1000, staleTime: 1000 });

	await usePreFetchCatQuery(queryClient);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CatFact />
		</HydrationBoundary>
	);
}
