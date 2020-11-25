import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Champion } from './champion.entity';
import { TraitAttribute } from './trait-attribute.entity';
import { TraitSet } from './trait-set.entity';

@Entity('traits')
export class Trait {
  constructor(name: string, description: string, icon: string, kind: string, sets: TraitSet[]) {
    this.id = null;
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.kind = kind;
    this.sets = sets;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon: string;

  @Column()
  kind: string;


  @ManyToMany(() => Champion)
  @JoinTable({
    name: 'champions_traits',
    joinColumn: {
      name: 'id_trait',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_champion',
      referencedColumnName: 'id',
    },
  })
  champions: Champion[];

  
  @OneToMany(
    () => TraitSet,
    set => set.trait,
    {
      eager: true,cascade:['insert']}
  )
  sets: TraitSet[];
}
