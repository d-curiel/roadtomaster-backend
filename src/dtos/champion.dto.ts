import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { ChampionAttributeDto } from './champion-attribute.dto';
import { TraitDto } from './trait.dto';
import { UltimateDto } from './ultimate.dto';

export class ChampionDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  cost: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  splashart: string;

  @ApiProperty()
  ultimate: UltimateDto;

  @ApiProperty()
  attributes: ChampionAttributeDto[];

  @ApiProperty()
  traits: TraitDto[];
}
