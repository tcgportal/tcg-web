'use client';
import { responsiveClassnames } from '@/utils/utils';
import gsap from 'gsap';
import React, { useCallback, useRef } from 'react';
import GlowCard from '../GlowCard';
import { TAPPInfo } from '@/utils/constants';

export const GlowCardPanel: React.FC<{
	games: TAPPInfo['games'];
}> = ({ games }) => {
	const mainRef = useRef<HTMLDivElement>(null);
	const cards: Array<{
		id: string;
		base: number;
		spread: number;
		outer: boolean;
		control: boolean;
	}> = games.map((game, index) => {
		return {
			id: `card-${game.name}`,
			spread: gsap.utils.random(0, 1000),
			outer: true,
			control: false,
			base: gsap.utils.random(0, 359),
		};
	});

	const UPDATE = useCallback(({ x, y }: { x: number; y: number }) => {
		if (mainRef.current) {
			mainRef.current.style.setProperty('--x', x.toFixed(2));
			//mainRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
			mainRef.current.style.setProperty('--y', y.toFixed(2));
			//mainRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
		}
	}, []);

	return (
		<main
			className={responsiveClassnames(
				{
					'2xl': ['2xl:grid-cols-2', '2xl:py-8', '2xl:px-8', '2xl:gap-8', '2xl:h-auto'],
					xl: ['xl:grid-cols-2', 'xl:py-6', 'xl:px-6', 'xl:gap-6', 'xl:h-auto'],
					lg: ['lg:grid-cols-2', 'lg:py-4', 'lg:px-4', 'lg:gap-4', 'lg:h-full'],
					md: ['md:grid-cols-1', 'md:py-4', 'md:px-4', 'md:gap-4', 'md:h-full'],
					sm: ['sm:grid-cols-1', 'sm:py-2', 'sm:px-4', 'sm:gap-2', 'sm:h-full'],
					default: ['grid-cols-1', 'py-2', 'px-4', 'gap-2', 'h-full'],
				},
				'glow-card__panel overflow-x-visible w-full',
			)}
			ref={mainRef}
			onPointerMove={(event) => {
				//console.log(event);
				UPDATE({ x: event.clientX, y: event.clientY });
			}}
		>
			{cards.map((card, index) => {
				return <GlowCard key={card.id} index={index} expand={index === cards.length - 1} />;
			})}
		</main>
	);
};

export default GlowCardPanel;
