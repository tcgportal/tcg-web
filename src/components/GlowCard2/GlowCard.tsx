import { classNames, responsiveClassnames } from '@/utils/utils';
import React from 'react';
import './glow-card.css';

export const GlowCard: React.FC<{ isLast: boolean }> = ({ isLast }) => {
	return (
		<article
			className={responsiveClassnames(
				{
					'2xl': [isLast ? '2xl:col-span-2' : '2xl:col-span-1'],
					xl: [isLast ? 'xl:col-span-2' : 'xl:col-span-1'],
					lg: [isLast ? 'lg:col-span-2' : 'lg:col-span-1'],
					md: [isLast ? 'md:col-span-2' : 'md:col-span-1'],
					sm: ['sm:col-span-1'],
					default: ['col-span-1'],
				},
				'glow-card__content flex w-full h-full justify-center items-center text-center relative',
			)}
		>
			<div className={classNames('flex w-full h-full absolute glow-card__border')}></div>
			<div>Content</div>
		</article>
	);
};

export default GlowCard;
