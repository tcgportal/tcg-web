import { responsiveClassnames } from '@/utils/utils';
import HomeTitle from './_components/HomeTitle';
import GameGrid from './_components/GameGrid';
import Image from 'next/image';

export default async function Home() {
    return (
        <>
            {/* <div className='fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0a_40%,#232425_100%)]'></div> */}
            <div className="fixed top-0 left-0 w-full h-full">
                <Image src={'/backmain.webp'} alt={'background'} className="object-cover" fill={true} />
            </div>
            <div
                className={responsiveClassnames(
                    {
                        '2xl': ['2xl:grid-cols-2', '2xl:grid-rows-1', '2xl:gap-16', '2xl:p-10'],
                        xl: ['xl:grid-cols-2', 'xl:grid-rows-1', 'xl:gap-12', 'xl:p-8'],
                        lg: ['lg:grid-cols-1', 'lg:grid-rows-2', 'lg:gap-12', 'lg:p-6'],
                        md: ['md:grid-cols-1', 'md:grid-rows-2', 'md:gap-8', 'md:p-4'],
                        sm: ['sm:grid-cols-1', 'sm:grid-rows-2', 'sm:gap-6', 'sm:p-4'],
                        default: ['grid-cols-1', 'grid-rows-2', 'gap-4', 'p-4'],
                    },
                    'grid w-full h-full items-center overflow-y-auto overflow-x-visible relative z-10',
                )}
            >
                <HomeTitle disableLoginButton={false} />
                <GameGrid />
                {/* <CatFactServerComponent /> */}
            </div>
        </>
    );
}
