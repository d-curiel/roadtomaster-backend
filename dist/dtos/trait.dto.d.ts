import { TraitSetDto } from "./trait-set.dto";
export declare class TraitDto {
    id: number;
    name: string;
    description: string;
    icon: string;
    kind: string;
    sets: TraitSetDto[];
}
