import { ApiProperty } from "@nestjs/swagger";
import { UltimateAttributeDto } from "./ultimate-attribute-dto";

export class UltimateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  kind: string;
  
  @ApiProperty()
  icon: string;

  @ApiProperty()
  attributes: UltimateAttributeDto[];
}
