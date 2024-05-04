export type TAPPInfo = {
	appName?: string;
	games: Array<{
		name: string;
		img: string;
		icon: string;
	}>;
};

export const APP_INFO: TAPPInfo = {
	appName: process.env.APP_NAME,
	games: [
		{
			name: 'pokemon',
			img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8',
			icon: 'https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Image-File.png',
		},
		{
			name: 'yugi-oh',
			img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd6hhpg-dac1f150-3337-491b-86ce-5c2b1d3acde0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQ2aGhwZy1kYWMxZjE1MC0zMzM3LTQ5MWItODZjZS01YzJiMWQzYWNkZTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mKeHjmIIkaw6_SZNU6mDKcjH4OfyugLgbagdJ93N4B0',
			icon: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a6af839-076e-448b-b7e8-47dcfb1f1af3/dez92nc-4b2f4def-4fed-4b69-af8c-aacc5103ccec.png/v1/fill/w_915,h_874/blue_eyes_white_dragon_render_by_henukim_dez92nc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAxOCIsInBhdGgiOiJcL2ZcLzVhNmFmODM5LTA3NmUtNDQ4Yi1iN2U4LTQ3ZGNmYjFmMWFmM1wvZGV6OTJuYy00YjJmNGRlZi00ZmVkLTRiNjktYWY4Yy1hYWNjNTEwM2NjZWMucG5nIiwid2lkdGgiOiI8PTIxMTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._I-OlYvm5i17LctGPY4so6JxznR6yOiVA8bQ7i-WIzg',
		},
		{
			name: 'magic',
			img: 'https://images7.alphacoders.com/131/1313877.jpg',
			icon: 'https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Image-File.png',
		},
		{
			name: 'one-piece',
			img: 'https://motionbgs.com/media/1132/thousand-sunny-one-piece.jpg',
			icon: 'https://i.pinimg.com/originals/6b/6c/6c/6b6c6c03f772d82fe1cdd5a0cdc9cf51.png',
		},
		{
			name: 'lorcana',
			img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/disney-lorcana-rise-floodborn-raya-reveal.jpeg',
			icon: 'https://i.pinimg.com/originals/10/c8/ba/10c8ba912aff2f7192cae400173f7210.png',
		},
	],
};
