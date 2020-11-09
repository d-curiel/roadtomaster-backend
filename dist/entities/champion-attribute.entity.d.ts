import { AttributeKind } from "./attribute-kind.entity";
import { Champion } from "./champion.entity";
export declare class ChampionAttribute {
    constructor(tier: any, value: any);
    id: number;
    tier: string;
    value: string;
    attributeKind: AttributeKind;
    champion: Champion;
}
