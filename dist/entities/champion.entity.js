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
exports.Champion = void 0;
const PrimaryGeneratedColumn_1 = require("typeorm/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("typeorm/decorator/columns/Column");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const JoinColumn_1 = require("typeorm/decorator/relations/JoinColumn");
const OneToOne_1 = require("typeorm/decorator/relations/OneToOne");
const ultimate_entity_1 = require("./ultimate.entity");
const ultimate_dto_1 = require("../dtos/ultimate.dto");
const champion_attribute_entity_1 = require("./champion-attribute.entity");
const typeorm_1 = require("typeorm");
const trait_entity_1 = require("./trait.entity");
let Champion = class Champion {
    constructor(name, cost, icon, splashart) {
        this.name = name;
        this.cost = cost;
        this.icon = icon;
        this.splashart = splashart;
    }
};
__decorate([
    PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Champion.prototype, "id", void 0);
__decorate([
    Column_1.Column(),
    __metadata("design:type", String)
], Champion.prototype, "name", void 0);
__decorate([
    Column_1.Column(),
    __metadata("design:type", String)
], Champion.prototype, "cost", void 0);
__decorate([
    Column_1.Column({ length: 1 }),
    __metadata("design:type", String)
], Champion.prototype, "icon", void 0);
__decorate([
    Column_1.Column(),
    __metadata("design:type", String)
], Champion.prototype, "splashart", void 0);
__decorate([
    OneToOne_1.OneToOne(() => ultimate_entity_1.Ultimate, { cascade: ['insert'] }),
    JoinColumn_1.JoinColumn({
        name: 'id_ultimate',
    }),
    __metadata("design:type", ultimate_entity_1.Ultimate)
], Champion.prototype, "ultimate", void 0);
__decorate([
    typeorm_1.OneToMany(() => champion_attribute_entity_1.ChampionAttribute, championAttribute => championAttribute.champion, { cascade: ['insert'] }),
    __metadata("design:type", Array)
], Champion.prototype, "attributes", void 0);
__decorate([
    typeorm_1.ManyToMany(() => trait_entity_1.Trait),
    typeorm_1.JoinTable({
        name: "champions_traits",
        joinColumn: {
            name: "id_champion",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "id_trait",
            referencedColumnName: "id"
        }
    }),
    __metadata("design:type", Array)
], Champion.prototype, "traits", void 0);
Champion = __decorate([
    Entity_1.Entity('champions'),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], Champion);
exports.Champion = Champion;
//# sourceMappingURL=champion.entity.js.map