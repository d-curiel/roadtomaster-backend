import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TraitDto } from 'src/dtos/trait.dto';
import { TraitAttribute } from 'src/entities/trait-attribute.entity';
import { Trait } from 'src/entities/trait.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class TraitsService {
 constructor(
    private connection: Connection,
    @InjectRepository(Trait)
    private traitRepository: Repository<Trait>,
  ) {}

  async create(trait : TraitDto){
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(this.toEntity(trait));
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log("ERROR",err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
  findAll() {
    return this.traitRepository.find();
  } 
  private toEntity(trait : TraitDto){
      let traitEntity = new Trait(trait.name, trait.description, trait.icon, trait.kind);
      traitEntity.attributes = [];
      trait.attributes.forEach(traitAttributeDto => {
        traitEntity.attributes.push(new TraitAttribute(traitAttributeDto.tier, traitAttributeDto.value));
      })
    return traitEntity;
  }
}
