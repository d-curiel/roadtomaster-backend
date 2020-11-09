import { Ultimate } from './ultimate.entity';
import { ChampionAttribute } from './champion-attribute.entity';
import { Trait } from './trait.entity';
export declare class Champion {
    constructor(name: any, cost: any, icon: any, splashart: any);
    id: number;
    name: string;
    cost: string;
    icon: string;
    splashart: string;
    ultimate: Ultimate;
    attributes: ChampionAttribute[];
    traits: Trait[];
}
