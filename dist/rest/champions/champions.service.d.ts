import { ChampionAttribute } from 'src/entities/champion-attribute.entity';
import { Champion } from 'src/entities/champion.entity';
import { Trait } from 'src/entities/trait.entity';
import { Ultimate } from 'src/entities/ultimate.entity';
import { Connection, Repository } from 'typeorm';
export declare class ChampionsService {
    private connection;
    private championsRepository;
    constructor(connection: Connection, championsRepository: Repository<Champion>);
    createChampionWithUltimate(champion: Champion, ultimate: Ultimate, championAttributes: ChampionAttribute[], traits: Trait[]): Promise<Champion>;
    getAllChampionsFull(): Promise<Champion[]>;
}
