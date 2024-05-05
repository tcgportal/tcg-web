import { getDictionary } from '@/dictionary/dictionaries';
import CardSearch from './_components/CardSearch';

export default async function CardGameSearchPage({
    params,
    searchParams,
}: {
    params: { cardgame: string };
    searchParams: { [key: string]: string };
}) {
    const dictionary = await getDictionary('es');

    //TODO fetch cards from API

    return (
        <div
            className={'grid w-full mt-20'}
            style={{
                gridTemplateColumns: 'minmax(0, 120px) 1fr minmax(0, 120px)',
            }}
        >
            <CardSearch dictionary={dictionary} />
            <p>a</p>
        </div>
    );
}
