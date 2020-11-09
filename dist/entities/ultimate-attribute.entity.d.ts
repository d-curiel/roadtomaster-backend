import { AttributeKind } from './attribute-kind.entity';
import { Ultimate } from './ultimate.entity';
export declare class UltimateAttribute {
    constructor(tier: any, value: any);
    id: number;
    tier: string;
    value: number;
    kind: AttributeKind;
    ultimate: Ultimate;
}
