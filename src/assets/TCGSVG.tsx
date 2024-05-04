'use client';
import React, { useId } from 'react';

export const TCGSvg: React.FC<{ width?: string; height?: string }> = (props) => {
	const id = useId();
	const gradientId = useId();
	return (
		<svg style={{ width: props.width, height: props.height }} viewBox='0 0 612 666' fill='currentColor'>
			<defs>
				<linearGradient id={gradientId} x1='0%' y1='0%' x2='0%' y2='100%'>
					{/* <stop offset='0%' stopColor='hsl(var(--tcgportal-primary-500))' />
					<stop offset='100%' stopColor='hsl(var(--tcgportal-primary-900))' /> */}
					<stop offset='0%' stopColor='#FD376E' />
					<stop offset='100%' stopColor='#B70000' />
				</linearGradient>
			</defs>
			<path
				id={id}
				data-name='TCG Portal logo'
				className='cls-1'
				d='M355.623,25.012v666L63,387.5H223.525M382.377,25.012v666L675,387.5H514.475'
				transform='translate(-63 -25)'
				fill={`url(#${gradientId})`}
			/>
		</svg>
	);
};

export default TCGSvg;
