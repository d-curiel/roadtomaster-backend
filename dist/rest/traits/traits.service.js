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
exports.TraitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const trait_dto_1 = require("../../dtos/trait.dto");
const trait_attribute_entity_1 = require("../../entities/trait-attribute.entity");
const trait_entity_1 = require("../../entities/trait.entity");
const typeorm_2 = require("typeorm");
let TraitsService = class TraitsService {
    constructor(connection, traitRepository) {
        this.connection = connection;
        this.traitRepository = traitRepository;
    }
    async create(trait) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(this.toEntity(trait));
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
    findAll() {
        return this.traitRepository.find();
    }
    toEntity(trait) {
        let traitEntity = new trait_entity_1.Trait(trait.name, trait.description, trait.icon, trait.kind);
        traitEntity.attributes = [];
        trait.attributes.forEach(traitAttributeDto => {
            traitEntity.attributes.push(new trait_attribute_entity_1.TraitAttribute(traitAttributeDto.tier, traitAttributeDto.value));
        });
        return traitEntity;
    }
};
TraitsService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(trait_entity_1.Trait)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        typeorm_2.Repository])
], TraitsService);
exports.TraitsService = TraitsService;
//# sourceMappingURL=traits.service.js.map