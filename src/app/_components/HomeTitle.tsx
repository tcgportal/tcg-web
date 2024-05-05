import TCGSvg from '@/assets/TCGSVG';
import { TCGButton } from '@/components/TCGComponents/TCGButton';
import { getDictionary } from '@/dictionary/dictionaries';
import { APP_INFO } from '@/utils/constants';
import { responsiveClassnames } from '@/utils/utils';
import Link from 'next/link';
import React from 'react';

export async function HomeTitle({ disableLoginButton }: { disableLoginButton: boolean }) {
    const dictionary = await getDictionary('es');
    return (
        <section
            className={responsiveClassnames(
                {
                    '2xl': ['2xl:flex-row', '2xl:gap-8'],
                    xl: ['xl:flex-col', 'xl:gap-6'],
                    lg: ['lg:flex-col', 'lg:gap-6'],
                    md: ['md:flex-col', 'md:gap-4'],
                    sm: ['sm:flex-col', 'sm:gap-2'],
                    default: ['flex-col', 'gap-2'],
                },
                'flex w-full h-full items-center justify-center',
            )}
        >
            <div
                className={responsiveClassnames(
                    {
                        '2xl': ['2xl:w-[300px]', '2xl:h-[300px]'],
                        xl: ['xl:w-[300px]', 'xl:h-[300px]'],
                        lg: ['lg:w-[300px]', 'lg:h-[300px]'],
                        md: ['md:w-[300px]', 'md:h-[300px]'],
                        sm: ['sm:w-[200px]', 'sm:h-[200px]'],
                        default: ['w-[200px]', 'h-[200px]'],
                    },
                    'flex items-center justify-center w-full',
                )}
            >
                <TCGSvg width="100%" height="100%" />
            </div>
            <section className="flex flex-col justify-center items-center gap-4">
                <h1
                    className="text-6xl font-bold tracking-tight inline-block"
                    style={{
                        background: '-webkit-linear-gradient(left, #E9004C, #E9004C)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {APP_INFO.appName}
                </h1>
                <p
                    className={responsiveClassnames(
                        {
                            '2xl': ['2xl:text-4xl'],
                            xl: ['xl:text-3xl'],
                            lg: ['lg:text-2xl'],
                            md: ['md:text-xl'],
                            sm: ['sm:text-lg'],
                            default: ['text-lg'],
                        },
                        'w-full h-max tracking-tight inline-block max-w-[620px] text-center text-balance *:min-w-max',
                    )}
                >
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
                    <span
                        className="font-bold"
                        style={{
                            background: '-webkit-linear-gradient(left, #E9004C, #E9004C)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {dictionary.pages.home.buyText.compra}
                    </span>{' '}
                    {dictionary.pages.home.buyText.y}{' '}
                    <span
                        className="font-bold"
                        style={{
                            background: '-webkit-linear-gradient(left, #E9004C, #E9004C)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {dictionary.pages.home.buyText.vende}
                    </span>{' '}
                    {dictionary.pages.home.buyText.cartas}
                </p>
                {/* TODO: Check if user is logged in, if not show the button */}
                {!disableLoginButton ? (
                    <TCGButton className="w-full" color={'primary_glow'} style={{ animationDuration: '3s' }}>
                        {dictionary.pages.home.register}
                    </TCGButton>
                ) : undefined}
                <p>
                    {dictionary.pages.home.shop.part1}{' '}
                    <Link href="/shop-form" className="text-primary opacity-100 font-semibold hover:underline">
                        {dictionary.pages.home.shop.part2}
                    </Link>
                </p>
            </section>
        </section>
    );
}

export default HomeTitle;
