import { ApiProperty } from "@nestjs/swagger";

export class TraitAttributeDto {
  @ApiProperty()
  tier: string;

  @ApiProperty()
  value: number;
}
