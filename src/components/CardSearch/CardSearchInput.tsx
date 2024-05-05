'use client';

import { Input, InputProps } from '@nextui-org/react';
import { ICONS } from '@/utils/icons';
import { classNames } from '@/utils/utils';
import TCGIcon from '../TCGComponents/TCGIcon';

type TInputProps = Omit<InputProps, 'onChange'> & {
    classNames?: {
        base?: string[];
        label?: string[];
        input?: string[];
        innerWrapper?: string[];
        inputWrapper?: string[];
    };
    onChange: (value: string) => void;
};

export default function CardSearchInput({ name, placeholder, classNames: inputClassNames, value, onChange, ...otherProps }: TInputProps) {
    return (
        <Input
            {...otherProps}
            isClearable
            radius="lg"
            name={name}
            classNames={{
                base: classNames(...(inputClassNames?.base || [])),
                label: classNames('text-black/50 dark:text-white/90', ...(inputClassNames?.label || [])),
                input: classNames(
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                    ...(inputClassNames?.input || []),
                ),
                innerWrapper: classNames('bg-transparent', ...(inputClassNames?.innerWrapper || [])),
                inputWrapper: classNames(
                    'shadow-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focused=true]:bg-default-200/50',
                    'dark:group-data-[focused=true]:bg-default/60',
                    '!cursor-text',
                    ...(inputClassNames?.inputWrapper || []),
                ),
            }}
            placeholder={placeholder}
            startContent={<TCGIcon icon={ICONS.SEARCH} className={'text-primary'} width="1.5rem" height="1.5rem" />}
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
