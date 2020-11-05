import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ChampionDto } from 'src/dtos/champion.dto';
import { ChampionsService } from './champions.service';
import { Champion } from 'src/entities/champion.entity';
import { ChampionAttribute } from 'src/entities/champion-attribute.entity';
import { Trait } from 'src/entities/trait.entity';
import { Ultimate } from 'src/entities/ultimate.entity';

@Controller('champions')
export class ChampionsController {
  constructor(private service: ChampionsService) {}

  @Get()
  getAll(){
    return this.service.getAllChampionsFull();
  }
  @Post()
  create(@Body() champion: ChampionDto) {
    let championEntity = new Champion(
      champion.name,
      champion.cost,
      champion.icon,
      champion.splashart,
    );
    let ultimateEntity: Ultimate = new Ultimate(
      champion.ultimate.name,
      champion.ultimate.description,
      champion.ultimate.kind,
      champion.ultimate.icon,
    );
    let championAttributes: ChampionAttribute [] = [] ;
    champion.attributes.forEach(attribute => {
      let attributeEntity = new ChampionAttribute(
        attribute.tier,
        attribute.value,
        attribute.kind
      );
      attributeEntity.attributekind.id = attribute.attributekind.id;
      championAttributes.push(attributeEntity);
    });
    let traits: Trait [] = [] ;
    champion.traits.forEach(trait => {
      let traitEntity = new Trait(
       null,
        null, null, null
      );
      traitEntity.id = trait.id;
      traits.push(traitEntity);
    });
    return this.service.createChampionWithUltimate(
      championEntity,
      ultimateEntity,
      championAttributes,
      traits
    );
  }
}
