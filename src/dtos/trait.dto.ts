import { ApiProperty } from "@nestjs/swagger";
import { TraitSetDto } from "./trait-set.dto";

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
    @ApiProperty({ type: () => [TraitSetDto] })
    sets: TraitSetDto[];
}
