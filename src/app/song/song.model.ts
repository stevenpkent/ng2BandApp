import {album} from '../album/album.model';
import {band} from '../band/band.model';

export class song {
    name: string;
    album: album;
    albumId: number;
    band: band;
}
