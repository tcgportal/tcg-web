'use client';

import { NextUIProvider } from '@nextui-org/react';
import QueryClientProvider from './QueryClientProvider';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
	let theme = 'light';
	if (global?.window?.matchMedia && global.window?.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}
	return (
		<NextUIProvider>
			<NextThemesProvider attribute='class' defaultTheme={theme}>
				<QueryClientProvider>{children}</QueryClientProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
