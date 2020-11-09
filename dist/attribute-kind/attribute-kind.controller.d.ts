import { AttributeKindDto } from 'src/dtos/attribute-kind.dto';
import { AttributeKind } from 'src/entities/attribute-kind.entity';
import { AttributeKindService } from './attribute-kind.service';
export declare class AttributeKindController {
    private service;
    constructor(service: AttributeKindService);
    getAllByKind(kind: string): Promise<AttributeKind[]>;
    create(attributeKind: AttributeKindDto): Promise<void>;
}
