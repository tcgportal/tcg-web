'use client';

import { NextUIProvider } from '@nextui-org/react';
import QueryClientProvider from './QueryClientProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<QueryClientProvider>{children}</QueryClientProvider>
		</NextUIProvider>
	);
}
