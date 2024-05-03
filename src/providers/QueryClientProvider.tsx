'use client';

import { getQueryClient } from '@/queries/queryBase';
import { QueryClientProvider as QueryClientProv } from '@tanstack/react-query';

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
	const queryClient = getQueryClient();
	return <QueryClientProv client={queryClient}>{children}</QueryClientProv>;
}
