import { classNames, responsiveClassnames } from '@/utils/utils';
import React from 'react';
import './glow-card.css';

export const GlowCard: React.FC<{ index: number; expand?: boolean }> = ({ index, expand }) => {
	return (
		<div
			className={responsiveClassnames(
				{
					'2xl': [expand ? '2xl:col-span-2' : '2xl:col-span-1', '2xl:row-span-1', '2xl:h-[300px]'],
					xl: [expand ? 'xl:col-span-2' : 'xl:col-span-1', 'xl:row-span-1', 'xl:h-[300px]'],
					lg: [expand ? 'lg:col-span-2' : 'lg:col-span-1', 'lg:row-span-1', 'lg:h-[300px]'],
					md: ['md:col-span-1', 'md:row-span-1', 'md:h-[200px]'],
					sm: ['sm:col-span-1', 'sm:row-span-1', 'sm:h-[200px]'],
					default: ['col-span-1', 'row-span-1', 'h-[200px]'],
				},
				'wrapper',
			)}
			style={{ ...{}, '--index': index } as any}
		>
			<article
				className={responsiveClassnames(
					{
						'2xl': ['2xl:h-[300px]'],
						xl: ['xl:h-[300px]'],
						lg: ['lg:h-[300px]'],
						md: ['md:h-[200px]'],
						sm: ['sm:h-[200px]'],
						default: ['h-[200px]'],
					},
					'card',
				)}
				data-glow='true'
			>
				<div data-glow='true'></div>
				<div className='card__content'>Pokemon</div>
			</article>
		</div>
	);
};

export default GlowCard;
