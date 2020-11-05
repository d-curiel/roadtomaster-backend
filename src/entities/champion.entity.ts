import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { JoinColumn } from 'typeorm/decorator/relations/JoinColumn';
import { OneToOne } from 'typeorm/decorator/relations/OneToOne';
import { Ultimate } from './ultimate.entity';
import { UltimateDto } from 'src/dtos/ultimate.dto';
import { ChampionAttribute } from './champion-attribute.entity';
import { JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Trait } from './trait.entity';

@Entity('champions')
export class Champion {
constructor(name, cost, icon, splashart){
  this.name = name;
  this.cost = cost;
  this.icon = icon;
  this.splashart = splashart;
}

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cost: string;

  @Column({ length: 1 })
  icon: string;

  @Column()
  splashart: string;

  @OneToOne(
    () => Ultimate, {cascade:['insert']}
  ) 
  @JoinColumn({
    name: 'id_ultimate',
  })
  ultimate: Ultimate;

  @OneToMany(() => ChampionAttribute, championAttribute => championAttribute.champion, {cascade:['insert']})
  attributes: ChampionAttribute[];
  
  @ManyToMany(() => Trait)
  @JoinTable({
    name: "champions_traits",
    joinColumn: {
        name: "id_champion",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "id_trait",
        referencedColumnName: "id"
    }
})
  traits: Trait[];
}
