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
exports.TraitAttribute = void 0;
const typeorm_1 = require("typeorm");
const attribute_kind_entity_1 = require("./attribute-kind.entity");
const trait_entity_1 = require("./trait.entity");
let TraitAttribute = class TraitAttribute {
    constructor(tier, value) {
        this.tier = tier;
        this.value = value;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TraitAttribute.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TraitAttribute.prototype, "tier", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TraitAttribute.prototype, "value", void 0);
__decorate([
    typeorm_1.OneToOne(() => attribute_kind_entity_1.AttributeKind, {
        eager: true,
    }),
    typeorm_1.JoinColumn({
        name: 'id_attribute_kind',
    }),
    __metadata("design:type", attribute_kind_entity_1.AttributeKind)
], TraitAttribute.prototype, "kind", void 0);
__decorate([
    typeorm_1.ManyToOne(() => trait_entity_1.Trait, trait => trait.attributes),
    typeorm_1.JoinColumn({
        name: 'id_trait',
    }),
    __metadata("design:type", trait_entity_1.Trait)
], TraitAttribute.prototype, "trait", void 0);
TraitAttribute = __decorate([
    typeorm_1.Entity('trait_attributes'),
    __metadata("design:paramtypes", [Object, Object])
], TraitAttribute);
exports.TraitAttribute = TraitAttribute;
//# sourceMappingURL=trait-attribute.entity.js.map