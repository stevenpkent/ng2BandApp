import { Song } from '../song/song.model';
import { band } from '../band/band.model';

export class album {
    id: number;
    name: string;
    rating: number;
    year: number;
    songs: Song[];
    band: band;
}
