import { song } from '../song/song.model';

export class album {
    id: number;
    name: string;
    rating: number;
    year: number;
    songs: song[];
}
