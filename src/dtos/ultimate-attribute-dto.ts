import { ApiProperty } from "@nestjs/swagger";
import { AttributeKindDto } from "./attribute-kind.dto";

export class UltimateAttributeDto {
  
  @ApiProperty()
  tier: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  attributeKind : AttributeKindDto;
}
