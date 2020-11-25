import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TraitDto } from 'src/dtos/trait.dto';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { TraitAttribute } from 'src/entities/trait-attribute.entity';
import { TraitSet } from 'src/entities/trait-set.entity';
import { Trait } from 'src/entities/trait.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class TraitsService {
  constructor(
    private connection: Connection,
    @InjectRepository(Trait)
    private traitRepository: Repository<Trait>,
  ) {}

  async create(trait: TraitDto) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(this.toEntity(trait));
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('ERROR', err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
  findAll() {
    return this.traitRepository.find();
  }
  private toEntity(trait: TraitDto) {
    let sets: TraitSet[] = [];
    trait.sets.forEach(set => {
      let setEntity = new TraitSet(set.min, set.max, set.tier);
      setEntity.attributes = [];
      set.attributes.forEach(traitAttributeDto => {
        let attribute = new TraitAttribute(
          traitAttributeDto.value,
        );
        attribute.kind = new AttributeKind(null, null, null);
        attribute.kind.id = traitAttributeDto.kind;
        setEntity.attributes.push(attribute);
      });
      sets.push(setEntity);
    });
    let traitEntity = new Trait(
      trait.name,
      trait.description,
      trait.icon,
      trait.kind,
      sets,
    );
console.log("TRAIT", traitEntity);
    return traitEntity;
  }
}
