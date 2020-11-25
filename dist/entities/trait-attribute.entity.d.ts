import { AttributeKind } from "./attribute-kind.entity";
import { TraitSet } from "./trait-set.entity";
export declare class TraitAttribute {
    constructor(value: any);
    id: number;
    value: number;
    kind: AttributeKind;
    set: TraitSet;
}
