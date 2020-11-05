import { Module } from '@nestjs/common';
import { AttributeKindService } from './attribute-kind.service';
import { AttributeKindController } from './attribute-kind.controller';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeKind])],
  providers: [AttributeKindService],
  controllers: [AttributeKindController]
})
export class AttributeKindModule {}
