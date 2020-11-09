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
exports.ChampionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const champion_attribute_entity_1 = require("../entities/champion-attribute.entity");
const champion_entity_1 = require("../entities/champion.entity");
const trait_entity_1 = require("../entities/trait.entity");
const ultimate_entity_1 = require("../entities/ultimate.entity");
const typeorm_2 = require("typeorm");
let ChampionsService = class ChampionsService {
    constructor(connection, championsRepository) {
        this.connection = connection;
        this.championsRepository = championsRepository;
    }
    async createChampionWithUltimate(champion, ultimate, championAttributes, traits) {
        const queryRunner = this.connection.createQueryRunner();
        let championCreated;
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            champion.ultimate = ultimate;
            champion.traits = traits;
            champion.attributes = championAttributes;
            championCreated = await queryRunner.manager.save(champion);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log("ERROR", err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
            return this.championsRepository.findOne(championCreated.id, {
                relations: ['ultimate', 'attributes', 'traits'],
            });
        }
    }
    async getAllChampionsFull() {
        return this.championsRepository.find({
            relations: ['ultimate', 'attributes', 'traits'],
        });
    }
};
ChampionsService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(champion_entity_1.Champion)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        typeorm_2.Repository])
], ChampionsService);
exports.ChampionsService = ChampionsService;
//# sourceMappingURL=champions.service.js.map