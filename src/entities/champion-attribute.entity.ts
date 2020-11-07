import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { AttributeKind } from "./attribute-kind.entity";
import { Champion } from "./champion.entity";

@Entity('champion_attributes')
export class ChampionAttribute {
  constructor(tier, value) {
    this.tier = tier;
    this.value = value;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tier: string;

  @Column()
  value: string;

  @OneToOne(
    () => AttributeKind, {
        eager: true
    }
  )  @JoinColumn({
    name: 'id_attribute_kind',
  })
  attributeKind: AttributeKind;

  @ManyToOne(() => Champion, champion => champion.attributes)
  @JoinColumn({
    name: 'id_champion',
  })
  champion: Champion;
}
