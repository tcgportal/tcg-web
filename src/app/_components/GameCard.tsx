'use client';

import { classNames } from '@/utils/utils';
import gsap from 'gsap';
import { Bebas_Neue } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export function GameCard({ imgBackground, title, icon }: { imgBackground: string; title: string; icon: string }) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [objectPosition, setObjectPosition] = useState({
		x: 0,
		y: 0,
	});
	const UPDATE = ({ x, y }: { x: number; y: number }) => {
		console.log(gsap.utils.mapRange(0, window.innerWidth, -1, 1, x), gsap.utils.mapRange(0, window.innerHeight, -1, 1, y));
		setObjectPosition({
			x: gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
			y: gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
		});
		// gsap.set(document.documentElement, {
		// 	'--x': gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
		// 	'--y': gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
		// });
	};
	const handleOrientation = ({ beta, gamma }: { beta: number; gamma: number }) => {
		const isLandscape = window.matchMedia('(orientation: landscape)').matches;
		gsap.set(document.documentElement, {
			'--x': gsap.utils.clamp(-1, 1, isLandscape ? gsap.utils.mapRange(-45, 45, -1, 1, beta) : gsap.utils.mapRange(-45, 45, -1, 1, gamma)),
			'--y': gsap.utils.clamp(-1, 1, isLandscape ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma)) : gsap.utils.mapRange(20, 70, 1, -1, beta)),
		});
	};

	useEffect(() => {
		const cardStaticRef = cardRef?.current;
		if (cardStaticRef) {
			cardStaticRef.addEventListener('mousemove', UPDATE);
		}

		return () => {
			if (cardStaticRef) {
				cardStaticRef.removeEventListener('mousemove', UPDATE);
			}
		};
	}, []);

	return (
		<article className={classNames(bebasNeue.className)} ref={cardRef}>
			<div className='assets'>
				<img
					src={imgBackground}
					alt=''
					style={{
						objectPosition: `calc(-50% + (${objectPosition.x} * 30px)) calc(43% + (${objectPosition.y} * -20px))`,
					}}
				/>
				<h3
					style={{
						translate: `calc(-50% + (${objectPosition.x} * -30px)) calc(${objectPosition.y} * -20px)`,
					}}
				>
					{title}
				</h3>
				<img
					src={icon}
					alt=''
					style={{
						objectPosition: `calc(-50% + (${objectPosition.x} * -100px)) calc(43% + (${objectPosition.y} * -40px))`,
					}}
				/>
			</div>
			<div className='blur'>
				{/* <img src="osaka.jpeg" alt="" /> */}
				<div>
					<div
						className='layer'
						style={
							{
								...{},
								'--index': '1',
							} as any
						}
					></div>
					<div
						className='layer'
						style={
							{
								...{},
								'--index': '2',
							} as any
						}
					></div>
					<div
						className='layer'
						style={
							{
								...{},
								'--index': '3',
							} as any
						}
					></div>
					<div
						className='layer'
						style={
							{
								...{},
								'--index': '4',
							} as any
						}
					></div>
					<div
						className='layer'
						style={
							{
								...{},
								'--index': '5',
							} as any
						}
					></div>
				</div>
			</div>
			<div className='content'>
				<p>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
						<path d='M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z' />
						<path
							fillRule='evenodd'
							d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z'
							clipRule='evenodd'
						/>
					</svg>
					<span>Osaka Castle</span>
				</p>
				<p>Osaka, Japan</p>
			</div>
		</article>
	);
}
