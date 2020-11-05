import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttributeKindDto } from 'src/dtos/attribute-kind.dto';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { Connection } from 'typeorm';
import { AttributeKindService } from './attribute-kind.service';

@Controller('attribute-kind')
export class AttributeKindController {
  constructor(private service: AttributeKindService) {}

  @Get(':kind')
  getAllByKind(@Param('kind') kind: string) {
    return this.service.getAllByKind(kind);
  }

  @Post()
  create(@Body() attributeKind: AttributeKindDto) {
    return this.service.create(attributeKind);
  }
}
