import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeKindDto } from 'src/dtos/attribute-kind.dto';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class AttributeKindService {
  constructor(
    private connection: Connection,
    @InjectRepository(AttributeKind)
    private attributeKindRepository: Repository<AttributeKind>,
  ) {}

  async create(attributeKindDto : AttributeKindDto){
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(this.toEntity(attributeKindDto));
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log("ERROR",err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
  async getAllByKind(kind : string){
    return this.attributeKindRepository.find({
      where: {kind : kind},
    });
  }

  private toEntity(attributeKindDto : AttributeKindDto){
    return new AttributeKind(attributeKindDto.name, attributeKindDto.unit, attributeKindDto.kind);
  }
}
