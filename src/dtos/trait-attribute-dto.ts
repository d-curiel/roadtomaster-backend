import { ApiProperty } from "@nestjs/swagger";

export class TraitAttributeDto {

  @ApiProperty()
  value: number;

  @ApiProperty()
  kind: number;
}
