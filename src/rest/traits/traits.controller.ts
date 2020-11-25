import { Body, Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { TraitDto } from 'src/dtos/trait.dto';
import { TraitsService } from './traits.service';

@ApiTags('traits')
@Controller('traits')
export class TraitsController {

constructor(private traitService : TraitsService){}

@Get()
findAll(){
  return this.traitService.findAll();
}
@Post()
@ApiBody({ type: [TraitDto] })
  create(@Body() trait: TraitDto) {
      this.traitService.create(trait);
  }
}
