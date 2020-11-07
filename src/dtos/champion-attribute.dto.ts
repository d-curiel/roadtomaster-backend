import { ApiProperty } from '@nestjs/swagger';
import { AttributeKindDto } from './attribute-kind.dto';

export class ChampionAttributeDto {
  @ApiProperty()
  tier: string;

  @ApiProperty()
  value: string;

  @ApiProperty()
  kind: string;

  @ApiProperty()
  attributeKind: AttributeKindDto;
}
