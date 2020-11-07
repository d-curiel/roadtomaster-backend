import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionAttribute } from 'src/entities/champion-attribute.entity';
import { Champion } from 'src/entities/champion.entity';
import { Trait } from 'src/entities/trait.entity';
import { Ultimate } from 'src/entities/ultimate.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class ChampionsService {
  constructor(
    private connection: Connection,
    @InjectRepository(Champion)
    private championsRepository: Repository<Champion>
  ) {}
  async createChampionWithUltimate(
    champion: Champion,
    ultimate: Ultimate,
    championAttributes: ChampionAttribute[],
    traits : Trait[]
  ): Promise<Champion> {
    const queryRunner = this.connection.createQueryRunner();
    let championCreated;
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      champion.ultimate = ultimate;
      champion.traits = traits;
      champion.attributes = championAttributes;
      championCreated = await queryRunner.manager.save(champion);
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log("ERROR",err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
      return this.championsRepository.findOne(championCreated.id, {
        relations: ['ultimate', 'attributes', 'traits'],
      });
    }
  }

  async getAllChampionsFull(){
    return this.championsRepository.find({
      relations: ['ultimate', 'attributes', 'traits'],
    });
  }
}
