import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AttributeKindDto } from 'src/dtos/attribute-kind.dto';
import { AttributeKindService } from './attribute-kind.service';

@ApiTags('attribute-kind')
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
