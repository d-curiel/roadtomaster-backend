import { AttributeKindDto } from 'src/dtos/attribute-kind.dto';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { Connection, Repository } from 'typeorm';
export declare class AttributeKindService {
    private connection;
    private attributeKindRepository;
    constructor(connection: Connection, attributeKindRepository: Repository<AttributeKind>);
    create(attributeKindDto: AttributeKindDto): Promise<void>;
    getAllByKind(kind: string): Promise<AttributeKind[]>;
    private toEntity;
}
