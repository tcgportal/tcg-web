import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button, Card } from '@nextui-org/react';
import { APP_INFO } from '@/utils/constants';
import Link from 'next/link';

const GameSelector: React.FC = () => {
    const { games } = APP_INFO;

    const renderCards = () =>
        games.map((game, index) => (
            <div key={game.name} className={`w-full md:w-1/3 mb-4 md:mb-0 md:px-1 md:mt-2`}>
                <Link href={game.name}>
                    <Card className='min-w-[100px] min-h-[50px] p-4 border-1 border-primary'>
                        <div className='flex items-center'>
                            <img src={game.icon} alt={game.name} className='w-16 h-16' />
                            <div className='ml-2'>{game.displayName}</div>
                        </div>
                    </Card>
                </Link>
            </div>
        ));

    const content = (
        <PopoverContent>
            <div className='px-1 py-2 flex flex-wrap'>{renderCards()}</div>
        </PopoverContent>
    );

    return (
        <div className='flex flex-wrap md:inline-grid md:grid-cols-3 gap-4'>
            <Popover placement='bottom-start'>
                <PopoverTrigger>
                    <Button color='primary' variant='flat' className='capitalize'>
                        Elegir juego
                    </Button>
                </PopoverTrigger>
                {content}
            </Popover>
        </div>
    );
};

export default GameSelector;
