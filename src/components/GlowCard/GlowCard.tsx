import { classNames, responsiveClassnames } from '@/utils/utils';
import React from 'react';
import './glow-card.css';
import Link from 'next/link';

export const GlowCardBase: React.FC<{ className?: string; children: React.ReactNode; isLast: boolean }> = ({ className, children, isLast }) => {
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
				'glow-card__content flex w-full h-full justify-center items-center text-center relative bg-default-50',
				className,
			)}
		>
			<div className={classNames('flex w-full h-full absolute glow-card__border')}></div>
			{children}
		</article>
	);
};

export const GlowCard: React.FC<{ className?: string; children: React.ReactNode; isLast: boolean; link?: string }> = ({
	className,
	children,
	link,
	isLast,
}) => {
	if (link) {
		return (
			<Link
				href={link}
				className={responsiveClassnames({
					'2xl': [isLast ? '2xl:col-span-2' : '2xl:col-span-1'],
					xl: [isLast ? 'xl:col-span-2' : 'xl:col-span-1'],
					lg: [isLast ? 'lg:col-span-2' : 'lg:col-span-1'],
					md: [isLast ? 'md:col-span-2' : 'md:col-span-1'],
					sm: ['sm:col-span-1'],
					default: ['col-span-1'],
				})}
			>
				<GlowCardBase className={className} isLast={isLast}>
					{children}
				</GlowCardBase>
			</Link>
		);
	}
	return <GlowCardBase isLast={isLast}>{children}</GlowCardBase>;
};

export default GlowCard;
