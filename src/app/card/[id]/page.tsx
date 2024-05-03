import { getDictionary } from '@/dictionary/dictionaries';

export default async function CardDetailPage({ params }: { params: { id: string } }) {
	const dictionary = await getDictionary('en');
	return (
		<div>
			<h1>Card Detail: {params.id}</h1>
			<p>{dictionary.title}</p>
			<p>{dictionary.description}</p>
		</div>
	);
}
