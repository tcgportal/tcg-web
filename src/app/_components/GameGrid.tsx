import GlowCard from '@/components/GlowCard/GlowCard';
import { APP_INFO } from '@/utils/constants';
import { responsiveClassnames } from '@/utils/utils';
import React from 'react';

export const GameGrid: React.FC<{}> = () => {
	const games = APP_INFO.games;
	return (
		<section
			className={responsiveClassnames(
				{
					'2xl': ['2xl:gap-8'],
					xl: ['xl:gap-6'],
					lg: ['lg:gap-6'],
					md: ['md:gap-4'],
					sm: ['sm:gap-2'],
					default: ['gap-2'],
				},
				'flex w-full h-full items-center justify-items-center  overflow-x-visible',
			)}
		>
			{/* <GlowCardPanel
						games={games.map((item) => ({
							title: item.name,
							imgBackground: item.img,
							icon: item.icon,
						}))}
					/> */}
			<main
				className={responsiveClassnames(
					{
						'2xl': ['2xl:grid-cols-2', '2xl:gap-8'],
						xl: ['xl:grid-cols-2', 'xl:gap-8'],
						lg: ['lg:grid-cols-2', 'lg:gap-8'],
						md: ['md:grid-cols-2', 'md:gap-4'],
						sm: ['sm:grid-cols-1', 'sm:gap-2'],
						default: ['grid-cols-1', 'gap-2'],
					},
					'grid w-full h-full overflow-x-visible',
				)}
			>
				{games.map((game, index) => {
					return <GlowCard key={game.name} isLast={index === games.length - 1} />;
				})}
			</main>
		</section>
	);
};

export default GameGrid;
