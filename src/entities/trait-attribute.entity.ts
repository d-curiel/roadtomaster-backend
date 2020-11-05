import { ManyToOne, JoinColumn, Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { AttributeKind } from "./attribute-kind.entity";
import { Trait } from "./trait.entity";

@Entity('trait_attributes')
export class TraitAttribute {

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
    () => Trait,
    trait => trait.attributes,
  )
  @JoinColumn({
    name: 'id_trait',
  })
  trait: Trait;
}
