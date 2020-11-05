import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { AttributeKind } from "./attribute-kind.entity";
import { Champion } from "./champion.entity";

@Entity('champion_attributes')
export class ChampionAttribute {
  constructor(tier, value, kind) {
    this.tier = tier;
    this.value = value;
    this.kind = kind;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tier: string;

  @Column()
  value: string;

  @Column()
  kind: string;

  @OneToOne(
    () => AttributeKind, {
        eager: true
    }
  )  @JoinColumn({
    name: 'id_attribute_kind',
  })
  attributekind: AttributeKind;

  @ManyToOne(() => Champion, champion => champion.attributes)
  @JoinColumn({
    name: 'id_champion',
  })
  champion: Champion;
}
