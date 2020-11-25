import { Controller } from '@nestjs/common';
import {
  Get,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ChampionDto } from 'src/dtos/champion.dto';
import { ChampionsService } from './champions.service';
import { Champion } from 'src/entities/champion.entity';
import { ChampionAttribute } from 'src/entities/champion-attribute.entity';
import { Trait } from 'src/entities/trait.entity';
import { Ultimate } from 'src/entities/ultimate.entity';
import { UltimateAttribute } from 'src/entities/ultimate-attribute.entity';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('champions')
@Controller('champions')
export class ChampionsController {
  constructor(private service: ChampionsService) {}

  @Get()
  getAll() {
    return this.service.getAllChampionsFull();
  }
  @ApiBody({ type: [ChampionDto] })
  @Post()
  create(@Body() champion: ChampionDto) {
    let championEntity = new Champion(
      champion.name,
      champion.cost,
      champion.icon,
      champion.splashart,
    );
    let ultimateAttributes: UltimateAttribute[] = [];
    champion.ultimate.attributes.forEach(attribute => {
      let attributeEntity = new UltimateAttribute(
        attribute.tier,
        attribute.value,
      );
      attributeEntity.kind = new AttributeKind(null, null, null);
      attributeEntity.kind.id = attribute.attributeKind.id;
      ultimateAttributes.push(attributeEntity);
    });
    let ultimateEntity: Ultimate = new Ultimate(
      champion.ultimate.name,
      champion.ultimate.description,
      champion.ultimate.kind,
      champion.ultimate.icon,
    );
    ultimateEntity.attributes = ultimateAttributes;
    let championAttributes: ChampionAttribute[] = [];
    champion.attributes.forEach(attribute => {
      let attributeEntity = new ChampionAttribute(
        attribute.tier,
        attribute.value,
      );
      attributeEntity.attributeKind = new AttributeKind(null, null, null);
      attributeEntity.attributeKind.id = attribute.attributeKind.id;
      championAttributes.push(attributeEntity);
    });
    let traits: Trait[] = [];
    champion.traits.forEach(trait => {
      let traitEntity = new Trait(null, null, null, null, null);
      traitEntity.id = trait.id;
      traits.push(traitEntity);
    });
    return this.service.createChampionWithUltimate(
      championEntity,
      ultimateEntity,
      championAttributes,
      traits,
    );
  }
}
