import TCGSvg from '@/assets/TCGSVG';
import { APP_INFO } from '@/utils/constants';
import { responsiveClassnames } from '@/utils/utils';
import Link from 'next/link';
import React from 'react';

export default function Layout({ params, children }: { params: { cardgame: string }; children: React.ReactNode }) {
	const cardgame = APP_INFO.games.find((game) => params.cardgame === game.name);
	if (!cardgame) {
		return <div>Game not found</div>;
	}
	return (
		<>
			<nav
				className={responsiveClassnames(
					{
						'2xl': ['h-[100px]', 'px-8', 'py-4'],
						xl: ['h-[100px]', 'px-8', 'py-4'],
						lg: ['h-[100px]', 'px-8', 'py-4'],
						md: ['h-[100px]', 'px-8', 'py-4'],
						sm: ['h-[100px]', 'px-8', 'py-4'],
						default: ['h-[100px]', 'px-8', 'py-4'],
					},
					'flex w-full px-12 justify-between',
				)}
			>
				<Link href='/' className='flex h-full min-w-max w-auto items-center gap-4'>
					<TCGSvg height='100%' width='auto' />
					<h1
						className={responsiveClassnames(
							{
								'2xl': ['text-4xl'],
								xl: ['text-4xl'],
								lg: ['text-4xl'],
								md: ['text-4xl'],
								sm: ['text-3xl'],
								default: ['text-3xl'],
							},
							'font-bold min-w-max',
						)}
					>
						{APP_INFO.appName}
					</h1>
				</Link>
				<section className='flex'></section>
			</nav>
			<main className='flex w-full h-full'>{children}</main>
		</>
	);
}
