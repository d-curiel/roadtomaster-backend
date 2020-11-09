import { TraitDto } from 'src/dtos/trait.dto';
import { TraitsService } from './traits.service';
export declare class TraitsController {
    private traitService;
    constructor(traitService: TraitsService);
    findAll(): Promise<import("../../entities/trait.entity").Trait[]>;
    create(trait: TraitDto): void;
}
