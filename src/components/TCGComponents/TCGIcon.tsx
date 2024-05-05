import { classNames } from '@/utils/utils';
import React from 'react';

export type TTCGIcon = {
	id?: string;
	icon: string;
	className?: string;
	width?: string;
	height?: string;
	color?: string;
	style?: any;
	children?: any;
	transition?: boolean;
	rotate?: number;
};

export const TCGIcon: React.FC<TTCGIcon> = ({ id, icon, className, width, height, color, style, children, transition, rotate }) => {
	return (
		<span
			id={id}
			className={classNames(icon, className)}
			style={{
				...style,
				color: style?.color || color,
				width: style?.width || width,
				minWidth: style?.minWidth || width,
				maxWidth: style?.maxWidth || width,
				height: style?.height || height,
				minHeight: style?.minHeight || height,
				maxHeight: style?.maxHeight || height,
				transition: style?.transition || (transition !== false ? 'all .2s ease-in-out' : undefined),
				transform: style?.transform || (rotate ? `rotate(${rotate}deg)` : style?.transform || undefined),
			}}
			role='img'
			aria-hidden='true'
		>
			{children}
		</span>
	);
};

export default TCGIcon;
