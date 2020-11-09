import { ChampionAttribute } from './champion-attribute.entity';
import { TraitAttribute } from './trait-attribute.entity';
import { UltimateAttribute } from './ultimate-attribute.entity';
export declare class AttributeKind {
    constructor(name: any, unit: any, kind: any);
    id: number;
    name: string;
    unit: string;
    kind: string;
    championAttributes: ChampionAttribute[];
    ultimateAttributes: UltimateAttribute[];
    traitAttributes: TraitAttribute[];
}
