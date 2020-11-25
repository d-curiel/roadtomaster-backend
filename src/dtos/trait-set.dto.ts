import { ApiProperty } from "@nestjs/swagger";
import { TraitAttributeDto } from "./trait-attribute-dto";

export class TraitSetDto {
    @ApiProperty()
    min: number;
    @ApiProperty()
    max: number;
    @ApiProperty()
    tier: string;
    @ApiProperty({ type: () => [TraitAttributeDto] })
    attributes: TraitAttributeDto[];
}
