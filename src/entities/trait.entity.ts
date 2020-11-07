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

@Entity('traits')
export class Trait {
  constructor(name: string, description: string, icon: string, kind: string) {
    this.id = null;
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.kind = kind;
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
    () => TraitAttribute,
    traitAttribute => traitAttribute.trait,
    { cascade: ['insert'] },
  )
  attributes: TraitAttribute[];
}
