import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Champion } from './champion.entity';
import { UltimateAttribute } from './ultimate-attribute.entity';

@Entity('ultimates')
export class Ultimate {
  constructor(name, description, kind, icon) {
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
  kind: string;

  @Column({ length: 1 })
  icon: string;

  @OneToOne(
    () => Champion,
    champion => champion.ultimate,
  )
  champion: Champion;

  @OneToMany(
    () => UltimateAttribute,
    ultimateAttribute => ultimateAttribute.ultimate,
    { cascade: ['insert'] },
  )
  attributes: UltimateAttribute[];
}
