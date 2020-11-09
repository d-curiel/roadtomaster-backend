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
exports.Trait = void 0;
const typeorm_1 = require("typeorm");
const champion_entity_1 = require("./champion.entity");
const trait_attribute_entity_1 = require("./trait-attribute.entity");
let Trait = class Trait {
    constructor(name, description, icon, kind) {
        this.id = null;
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.kind = kind;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Trait.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trait.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trait.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trait.prototype, "icon", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Trait.prototype, "kind", void 0);
__decorate([
    typeorm_1.ManyToMany(() => champion_entity_1.Champion),
    typeorm_1.JoinTable({
        name: 'champions_traits',
        joinColumn: {
            name: 'id_trait',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'id_champion',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Trait.prototype, "champions", void 0);
__decorate([
    typeorm_1.OneToMany(() => trait_attribute_entity_1.TraitAttribute, traitAttribute => traitAttribute.trait, { cascade: ['insert'] }),
    __metadata("design:type", Array)
], Trait.prototype, "attributes", void 0);
Trait = __decorate([
    typeorm_1.Entity('traits'),
    __metadata("design:paramtypes", [String, String, String, String])
], Trait);
exports.Trait = Trait;
//# sourceMappingURL=trait.entity.js.map