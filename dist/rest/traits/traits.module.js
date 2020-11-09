"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitsModule = void 0;
const common_1 = require("@nestjs/common");
const traits_service_1 = require("./traits.service");
const traits_controller_1 = require("./traits.controller");
const trait_entity_1 = require("../../entities/trait.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TraitsModule = class TraitsModule {
};
TraitsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([trait_entity_1.Trait])],
        providers: [traits_service_1.TraitsService],
        controllers: [traits_controller_1.TraitsController]
    })
], TraitsModule);
exports.TraitsModule = TraitsModule;
//# sourceMappingURL=traits.module.js.map