import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button, Card } from '@nextui-org/react';
import { APP_INFO, TGame } from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';
import TCGIcon from '../TCGComponents/TCGIcon';
import { ICONS } from '@/utils/icons';
import GlowCard from '../GlowCard/GlowCard';
import { responsiveClassnames } from '@/utils/utils';

const GameSelector: React.FC<{ currentGame: TGame }> = ({ currentGame }) => {
    const { games } = APP_INFO;

    return (
        <div className='flex flex-wrap md:inline-grid md:grid-cols-3 gap-4'>
            <Popover placement='bottom-start'>
                <PopoverTrigger>
                    <Button
                        variant='bordered'
                        color='primary'
                        className='capitalize'
                        endContent={<TCGIcon icon={ICONS.ARROW_DOWN} width='1em' height='1em' />}
                    >
                        <div className='flex items-center'>
                            <Image src={currentGame.icon} alt={currentGame.name} width={32} height={32} />
                            <p className='ml-2 text-foreground'>{currentGame.displayName}</p>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div
                        className={responsiveClassnames(
                            {
                                '2xl': ['2xl:grid-cols-3', '2xl:gap-4'],
                                xl: ['xl:grid-cols-2', 'xl:gap-4'],
                                lg: ['lg:grid-cols-2', 'lg:gap-4'],
                                md: ['md:grid-cols-2', 'md:gap-2'],
                                sm: ['sm:grid-cols-1', 'sm:gap-2'],
                                default: ['grid-cols-1', 'gap-2'],
                            },
                            'grid w-full h-full overflow-x-visible p-4',
                        )}
                    >
                        {games.map((game, index) => (
                            <div key={game.name} className='w-[250px]'>
                                <GlowCard className='p-4' key={game.name} link={game.name} isLast={index === games.length - 1}>
                                    <Image
                                        src={game.image}
                                        alt={game.name}
                                        className='flex w-full h-full object-contain !relative'
                                        fill={true}
                                        sizes='(min-width: 768px) 100vw, (max-width: 767px) 100%'
                                    />
                                </GlowCard>
                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default GameSelector;
