import React from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import { ICONS } from '@/utils/icons';
import TCGIcon from '../TCGComponents/TCGIcon';

const AuthButtons: React.FC = () => {
    return (
        <div className='flex flex-wrap md:inline-grid md:grid-cols-2 gap-4'>
            <Popover placement='bottom-start'>
                <PopoverTrigger>
                    <Button
                        variant='bordered'
                        color='primary'
                        className='capitalize'
                        endContent={<TCGIcon icon={ICONS.ARROW_DOWN} width='1em' height='1em' />}
                    >
                        Login
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className='grid w-full h-full overflow-x-visible p-4'>
                        {/* Contenido del popover de Login */}
                        <p>Contenido del popover de Login</p>
                    </div>
                </PopoverContent>
            </Popover>
            <Popover placement='bottom-start'>
                <PopoverTrigger>
                    <Button
                        variant='bordered'
                        color='primary'
                        className='capitalize'
                        endContent={<TCGIcon icon={ICONS.ARROW_DOWN} width='1em' height='1em' />}
                    >
                        Registrarse
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className='grid w-full h-full overflow-x-visible p-4'>
                        {/* Contenido del popover de Registrarse */}
                        <p>Contenido del popover de Registrarse</p>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default AuthButtons;
