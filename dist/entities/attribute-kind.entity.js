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
exports.AttributeKind = void 0;
const typeorm_1 = require("typeorm");
const champion_attribute_entity_1 = require("./champion-attribute.entity");
const trait_attribute_entity_1 = require("./trait-attribute.entity");
const ultimate_attribute_entity_1 = require("./ultimate-attribute.entity");
let AttributeKind = class AttributeKind {
    constructor(name, unit, kind) {
        this.id = null;
        this.name = name;
        this.unit = unit;
        this.kind = kind;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AttributeKind.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AttributeKind.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AttributeKind.prototype, "unit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AttributeKind.prototype, "kind", void 0);
__decorate([
    typeorm_1.OneToMany(() => champion_attribute_entity_1.ChampionAttribute, championAttribute => championAttribute.attributeKind),
    __metadata("design:type", Array)
], AttributeKind.prototype, "championAttributes", void 0);
__decorate([
    typeorm_1.OneToMany(() => ultimate_attribute_entity_1.UltimateAttribute, ultimateAttribute => ultimateAttribute.kind),
    __metadata("design:type", Array)
], AttributeKind.prototype, "ultimateAttributes", void 0);
__decorate([
    typeorm_1.OneToMany(() => trait_attribute_entity_1.TraitAttribute, traitAttribute => traitAttribute.kind),
    __metadata("design:type", Array)
], AttributeKind.prototype, "traitAttributes", void 0);
AttributeKind = __decorate([
    typeorm_1.Entity('attribute_kind'),
    __metadata("design:paramtypes", [Object, Object, Object])
], AttributeKind);
exports.AttributeKind = AttributeKind;
//# sourceMappingURL=attribute-kind.entity.js.map