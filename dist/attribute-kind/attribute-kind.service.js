"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeKindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attribute_kind_dto_1 = require("../dtos/attribute-kind.dto");
const attribute_kind_entity_1 = require("../entities/attribute-kind.entity");
const typeorm_2 = require("typeorm");
let AttributeKindService = class AttributeKindService {
    constructor(connection, attributeKindRepository) {
        this.connection = connection;
        this.attributeKindRepository = attributeKindRepository;
    }
    async create(attributeKindDto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(this.toEntity(attributeKindDto));
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log("ERROR", err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async getAllByKind(kind) {
        return this.attributeKindRepository.find({
            where: { kind: kind },
        });
    }
    toEntity(attributeKindDto) {
        return new attribute_kind_entity_1.AttributeKind(attributeKindDto.name, attributeKindDto.unit, attributeKindDto.kind);
    }
};
AttributeKindService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(attribute_kind_entity_1.AttributeKind)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        typeorm_2.Repository])
], AttributeKindService);
exports.AttributeKindService = AttributeKindService;
//# sourceMappingURL=attribute-kind.service.js.map