'use client';
import React, { useId } from 'react';

export const TCGSvg: React.FC<{ width?: string; height?: string }> = (props) => {
	const id = useId();
	const gradientId = useId();
	return (
		<svg width={props.width || '1em'} height={props.height || '1em'} viewBox='0 0 612 666' fill='currentColor'>
			<defs>
				<linearGradient id={gradientId}>
					<stop offset='0%' stopColor='#FF1CF7' />
					<stop offset='100%' stopColor='#b249f8' />
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
