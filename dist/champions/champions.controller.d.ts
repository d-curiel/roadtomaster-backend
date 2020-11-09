import { ChampionDto } from 'src/dtos/champion.dto';
import { ChampionsService } from './champions.service';
import { Champion } from 'src/entities/champion.entity';
export declare class ChampionsController {
    private service;
    constructor(service: ChampionsService);
    getAll(): Promise<Champion[]>;
    create(champion: ChampionDto): Promise<Champion>;
}
