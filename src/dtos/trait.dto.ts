import { TraitAttribute } from "src/entities/trait-attribute.entity";
import { TraitAttributeDto } from "./trait-attribute-dto";

export class TraitDto {
    id: number;
    name: string;
    description: string;
    icon: string;
    kind: string;
    attributes: TraitAttributeDto[];
}
