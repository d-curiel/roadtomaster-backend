import { AttributeKind } from "./attribute-kind.entity";
import { Trait } from "./trait.entity";
export declare class TraitAttribute {
    constructor(tier: any, value: any);
    id: number;
    tier: string;
    value: number;
    kind: AttributeKind;
    trait: Trait;
}
