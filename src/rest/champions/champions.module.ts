import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Champion } from 'src/entities/champion.entity';
import { ChampionsController } from './champions.controller';
import { ChampionsService } from './champions.service';

@Module({
  
  imports: [TypeOrmModule.forFeature([Champion])],
  controllers: [ChampionsController],
  providers: [ChampionsService]
})
export class ChampionsModule {}
