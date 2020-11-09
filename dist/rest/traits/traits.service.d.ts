import { TraitDto } from 'src/dtos/trait.dto';
import { Trait } from 'src/entities/trait.entity';
import { Connection, Repository } from 'typeorm';
export declare class TraitsService {
    private connection;
    private traitRepository;
    constructor(connection: Connection, traitRepository: Repository<Trait>);
    create(trait: TraitDto): Promise<void>;
    findAll(): Promise<Trait[]>;
    private toEntity;
}
