"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_module_1 = require("@nestjs/typeorm/dist/typeorm.module");
const champion_entity_1 = require("../entities/champion.entity");
const champions_controller_1 = require("./champions.controller");
const champions_service_1 = require("./champions.service");
let ChampionsModule = class ChampionsModule {
};
ChampionsModule = __decorate([
    common_1.Module({
        imports: [typeorm_module_1.TypeOrmModule.forFeature([champion_entity_1.Champion])],
        controllers: [champions_controller_1.ChampionsController],
        providers: [champions_service_1.ChampionsService]
    })
], ChampionsModule);
exports.ChampionsModule = ChampionsModule;
//# sourceMappingURL=champions.module.js.map