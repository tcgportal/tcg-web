import { GlowCard as GlowCard2 } from '@/components/GlowCard2/GlowCard';
import GlowCardPanel from '@/components/GlowCardPanel/GlowCardPanel';
import CatFactServerComponent from '@/components/ServerComponent/ServerComponent';
import { APP_INFO } from '@/utils/constants';
import { classNames, responsiveClassnames } from '@/utils/utils';

export default async function Home() {
	const games = APP_INFO.games;
	return (
		<>
			<div className='fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0a_40%,#232425_100%)]'></div>
			<div
				className={responsiveClassnames(
					{
						'2xl': ['2xl:grid-cols-2', '2xl:grid-rows-1', '2xl:gap-16'],
						xl: ['xl:grid-cols-2', 'xl:grid-rows-1', 'xl:gap-12'],
						lg: ['lg:grid-cols-1', 'lg:grid-rows-2', 'lg:gap-12'],
						md: ['md:grid-cols-1', 'md:grid-rows-2', 'md:gap-8'],
						sm: ['sm:grid-cols-1', 'sm:grid-rows-2', 'sm:gap-6'],
						default: ['grid-cols-1', 'grid-rows-2', 'gap-4'],
					},
					'grid w-full h-full items-center overflow-y-auto max-w-[2040px] mx-auto overflow-x-visible',
				)}
			>
				<div className='w-full h-max text-[2.5rem] lg:text-6xl inline-block max-w-[620px] text-center text-balance *:min-w-max'>
					{/* <span
						className={classNames(
							'font-bold',
							'tracking-tight inline font-bold from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b',
						)}
					>
						Compra&nbsp;
					</span>
					<span className='font-semibold'>o&nbsp;</span>
					<span className={classNames('tracking-tight inline font-bold from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent bg-gradient-to-b')}>
						vende&nbsp;
					</span>
					<span className='font-semibold'>tus cartas de tu juego favorito</span> */}
					<svg width='612' height='666' viewBox='0 0 612 666'>
						<defs>
							{/* <style>
      .cls-1 {
        fill: #5d99dd;
        fill-rule: evenodd;
        filter: url(#filter);
      }
    </style> */}
							{/* <filter id='filter' x='63' y='25' width='612' height='666' filterUnits='userSpaceOnUse'>
								<feImage
									preserveAspectRatio='none'
									x='63'
									y='25'
									width='612'
									height='666'
									result='image'
									xlink:href='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjEyIiBoZWlnaHQ9IjY2NiIgdmlld0JveD0iMCAwIDYxMiA2NjYiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMzA2IiB5MT0iNjY2IiB4Mj0iMzA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzdiMDAxYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNTMyIiBzdG9wLWNvbG9yPSIjYzExZjQ4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI05hTk5hTk5hTiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNjEyIiBoZWlnaHQ9IjY2NiIvPgo8L3N2Zz4K'
								/>
								<feComposite result='composite' operator='in' in2='SourceGraphic' />
								<feBlend result='blend' in2='SourceGraphic' />
								<feFlood result='flood' flood-color='#fff' />
								<feComposite result='composite-2' operator='in' in2='SourceGraphic' />
								<feBlend result='blend-2' in2='blend' />
							</filter> */}
						</defs>
						<path
							id='Forma_1_copia'
							data-name='Forma 1 copia'
							className='cls-1'
							d='M355.623,25.012v666L63,387.5H223.525M382.377,25.012v666L675,387.5H514.475'
							transform='translate(-63 -25)'
						/>
					</svg>
				</div>
				<div
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
								'2xl': ['2xl:grid-cols-2', '2xl:py-12', '2xl:px-20', '2xl:gap-8'],
								xl: ['xl:grid-cols-2', 'xl:py-10', 'xl:px-16', 'xl:gap-8'],
								lg: ['lg:grid-cols-2', 'lg:py-8', 'lg:px-14', 'lg:gap-8'],
								md: ['md:grid-cols-2', 'md:py-6', 'md:px-8', 'lg:gap-4'],
								sm: ['sm:grid-cols-1', 'sm:py-4', 'sm:px-4', 'lg:gap-2'],
								default: ['grid-cols-1', 'py-4', 'px-4', 'gap-2'],
							},
							'grid w-full h-full overflow-x-visible',
						)}
					>
						{games.map((game, index) => {
							return <GlowCard2 key={game.name} isLast={index === games.length - 1} />;
						})}
					</main>
				</div>
				{/* <CatFactServerComponent /> */}
			</div>
		</>
	);
}
