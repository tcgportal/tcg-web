import lorcana from '@/assets/images/lorcana.webp';
import yugiOh from '@/assets/images/yugi.webp';
import magic from '@/assets/images/magic.webp';
import onePiece from '@/assets/images/op.webp';
import pokemon from '@/assets/images/pokemon.webp';
import lorcanaIcon from '@/assets/images/game_lorcana.webp';
import yugiOhIcon from '@/assets/images/game_yugi.webp';
import magicIcon from '@/assets/images/game_magic.webp';
import onePieceIcon from '@/assets/images/game_op.webp';
import pokemonIcon from '@/assets/images/game_poke.webp';

export type TAPPInfo = {
    appName?: string;
    games: Array<{
        name: string;
        displayName: string;
        image: string;
        icon?: string;
    }>;
};

export const APP_INFO: TAPPInfo = {
    appName: process.env.APP_NAME,
    games: [
        {
            name: 'pokemon',
            displayName: 'Pokémon TCG',
            image: pokemon.src,
            icon: pokemonIcon.src,
        },
        {
            name: 'yugi-oh',
            displayName: 'Yu-Gi-Oh! TCG',
            image: yugiOh.src,
            icon: yugiOhIcon.src,
        },
        {
            name: 'magic',
            displayName: 'Magic: The Gathering',
            image: magic.src,
            icon: magicIcon.src,
        },
        {
            name: 'one-piece',
            displayName: 'One Piece Card Game',
            image: onePiece.src,
            icon: onePieceIcon.src,
        },
        {
            name: 'lorcana',
            displayName: 'Disney Lorcana',
            image: lorcana.src,
            icon: lorcanaIcon.src,
        },
    ],
};
