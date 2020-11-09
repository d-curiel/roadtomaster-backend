import { Champion } from './champion.entity';
import { TraitAttribute } from './trait-attribute.entity';
export declare class Trait {
    constructor(name: string, description: string, icon: string, kind: string);
    id: number;
    name: string;
    description: string;
    icon: string;
    kind: string;
    champions: Champion[];
    attributes: TraitAttribute[];
}
