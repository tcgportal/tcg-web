import lorcana from '@/assets/images/lorcana.webp';
import yugiOh from '@/assets/images/yugi.webp';
import magic from '@/assets/images/magic.webp';
import onePiece from '@/assets/images/op.webp';
import pokemon from '@/assets/images/pokemon.webp';

export type TAPPInfo = {
	appName?: string;
	games: Array<{
		name: string;
		image: string;
	}>;
};

export const APP_INFO: TAPPInfo = {
	appName: process.env.APP_NAME,
	games: [
		{
			name: 'pokemon',
			image: pokemon.src,
		},
		{
			name: 'yugi-oh',
			image: yugiOh.src,
		},
		{
			name: 'magic',
			image: magic.src,
		},
		{
			name: 'one-piece',
			image: onePiece.src,
		},
		{
			name: 'lorcana',
			image: lorcana.src,
		},
	],
};
