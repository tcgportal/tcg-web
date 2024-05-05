'use client';

import CardSearchInput from '@/components/CardSearch/CardSearchInput';
import CardSearchResult from '@/components/CardSearch/CardSearchResult';
import { TDictionary } from '@/dictionary/dictionaries';
import { useSearchCardQuery } from '@/queries/cardQuery';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useCallback, useRef } from 'react';

export default function CardSearch({ dictionary }: { dictionary: TDictionary }) {
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const search = searchParams.get('search') || '';

    //const { cards, isLoading, isError } = useSearchCardQuery({ page: 1, enabled: true, search: search });

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const navigate = useCallback(
        (search: string) => {
            const queryString = createQueryString('search', search);
            router.push(`/${params.cardgame}?${queryString}`);
        },
        [createQueryString, params.cardgame, router],
    );

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(formRef.current as HTMLFormElement);
        const search = formData.get('search') as string;
        if (!search || search === '') router.replace(`/${params.cardgame}`);

        navigate(search);
    };

    return (
        <header className='flex flex-col w-full col-start-2'>
            <form ref={formRef} onSubmit={handleSubmit}>
                <CardSearchInput
                    classNames={{
                        base: ['transition'],
                        inputWrapper: [
                            'p-6 min-h-max h-max !transition-all border-1 border-transparent',
                            'hover:border-primary focus-within:border-primary',
                        ],
                    }}
                    value={search}
                    placeholder={dictionary.pages.cardgame.search.placeholder}
                    onChange={(value: string) => {}}
                    name={'search'}
                    onClear={() => {
                        console.log('clear');
                        navigate('');
                    }}
                    autoComplete='off'
                />
            </form>
            <CardSearchResult />
        </header>
    );
}
