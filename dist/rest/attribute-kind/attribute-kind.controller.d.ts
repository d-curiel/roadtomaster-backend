import { AttributeKindDto } from 'src/dtos/attribute-kind.dto';
import { AttributeKindService } from './attribute-kind.service';
export declare class AttributeKindController {
    private service;
    constructor(service: AttributeKindService);
    getAllByKind(kind: string): Promise<import("../../entities/attribute-kind.entity").AttributeKind[]>;
    create(attributeKind: AttributeKindDto): Promise<void>;
}
