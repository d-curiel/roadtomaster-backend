"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const champion_entity_1 = require("./entities/champion.entity");
const ultimate_entity_1 = require("./entities/ultimate.entity");
const attribute_kind_entity_1 = require("./entities/attribute-kind.entity");
const champion_attribute_entity_1 = require("./entities/champion-attribute.entity");
const traits_module_1 = require("./rest/traits/traits.module");
const trait_entity_1 = require("./entities/trait.entity");
const trait_attribute_entity_1 = require("./entities/trait-attribute.entity");
const ultimate_attribute_entity_1 = require("./entities/ultimate-attribute.entity");
const attribute_kind_module_1 = require("./rest/attribute-kind/attribute-kind.module");
const champions_module_1 = require("./rest/champions/champions.module");
const trait_set_entity_1 = require("./entities/trait-set.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            dist_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'loldev',
                password: '123456',
                database: 'roadtomaster_dev',
                entities: [champion_entity_1.Champion, ultimate_entity_1.Ultimate, attribute_kind_entity_1.AttributeKind, champion_attribute_entity_1.ChampionAttribute, trait_entity_1.Trait, trait_attribute_entity_1.TraitAttribute, ultimate_attribute_entity_1.UltimateAttribute, trait_set_entity_1.TraitSet],
                synchronize: false,
            }), champions_module_1.ChampionsModule, attribute_kind_module_1.AttributeKindModule, traits_module_1.TraitsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map