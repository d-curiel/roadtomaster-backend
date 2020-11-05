import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  Entity,
} from 'typeorm';
import { AttributeKind } from './attribute-kind.entity';
import { Ultimate } from './ultimate.entity';
@Entity('ultimate_attributes')
export class UltimateAttribute {
  constructor(tier, value) {
    this.tier = tier;
    this.value = value;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tier: string;

  @Column()
  value: number;

  @OneToOne(() => AttributeKind, {
    eager: true,
  })
  @JoinColumn({
    name: 'id_attribute_kind',
  })
  kind: AttributeKind;

  @ManyToOne(
    () => Ultimate,
    ultimate => ultimate.attributes,
  )
  @JoinColumn({
    name: 'id_ultimate',
  })
  ultimate: Ultimate;
}
