import { song } from '../song/song.model';
import { band } from '../band/band.model';

export class album {
    id: number;
    name: string;
    rating: number;
    year: number;
    songs: song[];
    band: band;
}
