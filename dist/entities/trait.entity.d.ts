import { Champion } from './champion.entity';
import { TraitSet } from './trait-set.entity';
export declare class Trait {
    constructor(name: string, description: string, icon: string, kind: string, sets: TraitSet[]);
    id: number;
    name: string;
    description: string;
    icon: string;
    kind: string;
    champions: Champion[];
    sets: TraitSet[];
}
