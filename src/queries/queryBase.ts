import { QueryClient } from '@tanstack/react-query';

export function getQueryClient({ refetchInterval, staleTime }: { refetchInterval?: number; staleTime?: number } = {}): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: staleTime ? staleTime : 60 * 1000,
				refetchInterval: refetchInterval ? refetchInterval : 5 * 60 * 1000,
			},
		},
	});
}
