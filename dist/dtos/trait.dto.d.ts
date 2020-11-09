import { TraitAttributeDto } from "./trait-attribute-dto";
export declare class TraitDto {
    id: number;
    name: string;
    description: string;
    icon: string;
    kind: string;
    attributes: TraitAttributeDto[];
}
