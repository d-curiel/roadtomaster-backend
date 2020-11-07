import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ChampionAttribute } from './champion-attribute.entity';
import { TraitAttribute } from './trait-attribute.entity';
import { UltimateAttribute } from './ultimate-attribute.entity';

@Entity('attribute_kind')
export class AttributeKind {
  constructor(name, unit, kind) {
    this.id = null;
    this.name = name;
    this.unit = unit;
    this.kind = kind;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unit: string;

  @Column()
  kind: string;

  @OneToMany(() => ChampionAttribute, championAttribute => championAttribute.attributeKind)
  championAttributes: ChampionAttribute[];
  
  @OneToMany(() => UltimateAttribute, ultimateAttribute => ultimateAttribute.kind)
  ultimateAttributes: UltimateAttribute[];
  
  @OneToMany(() => TraitAttribute, traitAttribute => traitAttribute.kind)
  traitAttributes: TraitAttribute[];
}
