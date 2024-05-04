import 'server-only';

const dictionaries: { [key: string]: () => Promise<TDictionary> } = {
	en: () => import('./es.json').then((module) => module.default),
	es: () => import('./es.json').then((module) => module.default),
};

type TDictionary = {
	title: string;
	description: string;
	home: {
		buyText: {
			compra: string;
			y: string;
			vende: string;
			cartas: string;
		};
		register: string;
		shop: {
			part1: string;
			part2: string;
		};
	};
};

export const getDictionary = async (locale: string): Promise<TDictionary> => {
	if (dictionaries[locale]) {
		return dictionaries[locale]();
	}
	return dictionaries.es();
};
