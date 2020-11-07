import { ApiProperty } from "@nestjs/swagger";
import { TraitAttribute } from "src/entities/trait-attribute.entity";
import { TraitAttributeDto } from "./trait-attribute-dto";

export class TraitDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    icon: string;
    @ApiProperty()
    kind: string;
    @ApiProperty()
    attributes: TraitAttributeDto[];
}
