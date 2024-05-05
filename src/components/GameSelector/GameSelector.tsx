import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button, Card } from '@nextui-org/react';
import { APP_INFO, TGame } from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';
import TCGIcon from '../TCGComponents/TCGIcon';
import { ICONS } from '@/utils/icons';
import GlowCard from '../GlowCard/GlowCard';

const GameSelector: React.FC<{ currentGame: TGame }> = ({ currentGame }) => {
    const { games } = APP_INFO;

    return (
        <div className='flex flex-wrap md:inline-grid md:grid-cols-3 gap-4'>
            <Popover placement='bottom-start'>
                <PopoverTrigger>
                    <Button variant='bordered' className='capitalize' endContent={<TCGIcon icon={ICONS.ARROW_DOWN} width='1em' height='1em' />}>
                        <div className='flex items-center'>
                            <Image src={currentGame.icon} alt={currentGame.name} width={32} height={32} />
                            <div className='ml-2'>{currentGame.displayName}</div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className='px-1 py-2 flex flex-wrap'>
                        {games.map((game, index) => (
                            <div key={game.name} className={`w-full md:w-1/3 mb-4 md:mb-0 md:px-1 md:mt-2`}>
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
