import { Module } from '@nestjs/common';
import { TraitsService } from './traits.service';
import { TraitsController } from './traits.controller';
import { Trait } from 'src/entities/trait.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Trait])],
  providers: [TraitsService],
  controllers: [TraitsController]
})
export class TraitsModule {}
