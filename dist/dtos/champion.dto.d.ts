import { ChampionAttributeDto } from './champion-attribute.dto';
import { TraitDto } from './trait.dto';
import { UltimateDto } from './ultimate.dto';
export declare class ChampionDto {
    name: string;
    cost: string;
    icon: string;
    splashart: string;
    ultimate: UltimateDto;
    attributes: ChampionAttributeDto[];
    traits: TraitDto[];
}
