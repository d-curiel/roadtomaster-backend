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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionAttribute = void 0;
const typeorm_1 = require("typeorm");
const attribute_kind_entity_1 = require("./attribute-kind.entity");
const champion_entity_1 = require("./champion.entity");
let ChampionAttribute = class ChampionAttribute {
    constructor(tier, value) {
        this.tier = tier;
        this.value = value;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ChampionAttribute.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChampionAttribute.prototype, "tier", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChampionAttribute.prototype, "value", void 0);
__decorate([
    typeorm_1.OneToOne(() => attribute_kind_entity_1.AttributeKind, {
        eager: true
    }),
    typeorm_1.JoinColumn({
        name: 'id_attribute_kind',
    }),
    __metadata("design:type", attribute_kind_entity_1.AttributeKind)
], ChampionAttribute.prototype, "attributeKind", void 0);
__decorate([
    typeorm_1.ManyToOne(() => champion_entity_1.Champion, champion => champion.attributes),
    typeorm_1.JoinColumn({
        name: 'id_champion',
    }),
    __metadata("design:type", champion_entity_1.Champion)
], ChampionAttribute.prototype, "champion", void 0);
ChampionAttribute = __decorate([
    typeorm_1.Entity('champion_attributes'),
    __metadata("design:paramtypes", [Object, Object])
], ChampionAttribute);
exports.ChampionAttribute = ChampionAttribute;
//# sourceMappingURL=champion-attribute.entity.js.map