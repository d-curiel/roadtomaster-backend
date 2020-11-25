import {
  ManyToOne,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { TraitAttribute } from './trait-attribute.entity';
import { Trait } from './trait.entity';

@Entity('trait_sets')
export class TraitSet {
  constructor(min, max, tier) {
    this.min = min;
    this.max = max;
    this.tier = tier;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  min: number;
  @Column()
  max: number;
  @Column()
  tier: string;

  @OneToMany(
    () => TraitAttribute,
    attribute => attribute.set,
    {
      eager: true,
      cascade:['insert']
    },
  )
  attributes: TraitAttribute[];

  @ManyToOne(
    () => Trait,
    trait => trait.sets,
  )
  @JoinColumn({
    name: 'id_trait',
  })
  trait: Trait;
}
