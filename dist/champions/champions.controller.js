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
exports.ChampionsController = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const champion_dto_1 = require("../dtos/champion.dto");
const champions_service_1 = require("./champions.service");
const ultimate_entity_1 = require("../entities/ultimate.entity");
const champion_entity_1 = require("../entities/champion.entity");
const champion_attribute_entity_1 = require("../entities/champion-attribute.entity");
const trait_entity_1 = require("../entities/trait.entity");
let ChampionsController = class ChampionsController {
    constructor(service) {
        this.service = service;
    }
    getAll() {
        return this.service.getAllChampionsFull();
    }
    create(champion) {
        let championEntity = new champion_entity_1.Champion(champion.name, champion.cost, champion.icon, champion.splashart);
        let ultimateEntity = new ultimate_entity_1.Ultimate(champion.ultimate.name, champion.ultimate.description, champion.ultimate.kind, champion.ultimate.icon);
        let championAttributes = [];
        champion.attributes.forEach(attribute => {
            let attributeEntity = new champion_attribute_entity_1.ChampionAttribute(attribute.tier, attribute.value, attribute.kind);
            attributeEntity.attributekind.id = attribute.attributekind.id;
            championAttributes.push(attributeEntity);
        });
        let traits = [];
        champion.traits.forEach(trait => {
            let traitEntity = new trait_entity_1.Trait(null, null, null, null);
            traitEntity.id = trait.id;
            traits.push(traitEntity);
        });
        return this.service.createChampionWithUltimate(championEntity, ultimateEntity, championAttributes, traits);
    }
};
__decorate([
    request_mapping_decorator_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChampionsController.prototype, "getAll", null);
__decorate([
    request_mapping_decorator_1.Post(),
    __param(0, route_params_decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [champion_dto_1.ChampionDto]),
    __metadata("design:returntype", void 0)
], ChampionsController.prototype, "create", null);
ChampionsController = __decorate([
    common_1.Controller('champions'),
    __metadata("design:paramtypes", [champions_service_1.ChampionsService])
], ChampionsController);
exports.ChampionsController = ChampionsController;
//# sourceMappingURL=champions.controller.js.map