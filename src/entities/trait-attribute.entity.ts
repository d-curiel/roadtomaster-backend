import { ManyToOne, JoinColumn, Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { AttributeKind } from "./attribute-kind.entity";
import { TraitSet } from "./trait-set.entity";
import { Trait } from "./trait.entity";

@Entity('trait_attributes')
export class TraitAttribute {

  constructor(value) {
    this.value = value;
  }

  @PrimaryGeneratedColumn()
  id: number;

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
    () => TraitSet,
    trait => trait.attributes,
  )
  @JoinColumn({
    name: 'id_trait_set',
  })
  set: TraitSet;
}
