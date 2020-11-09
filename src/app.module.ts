import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Champion } from './entities/champion.entity';
import { Ultimate } from './entities/ultimate.entity';
import { AttributeKind } from './entities/attribute-kind.entity';
import { ChampionAttribute } from './entities/champion-attribute.entity';
import { TraitsModule } from './rest/traits/traits.module';
import { Trait } from './entities/trait.entity';
import { TraitAttribute } from './entities/trait-attribute.entity';
import { UltimateAttribute } from './entities/ultimate-attribute.entity';
import { AttributeKindModule } from './rest/attribute-kind/attribute-kind.module';
import { ChampionsModule } from './rest/champions/champions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'PMYSQL139.dns-servicio.com',
      port: 3306,
      username: 'loldev',
      password: 'Z187qoz&',
      database: '7939201_roadtomaster',
      entities: [Champion, Ultimate, AttributeKind, ChampionAttribute, Trait, TraitAttribute, UltimateAttribute],
      synchronize: false,
    }),ChampionsModule, AttributeKindModule, TraitsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
