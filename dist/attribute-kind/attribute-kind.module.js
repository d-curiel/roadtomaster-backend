"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeKindModule = void 0;
const common_1 = require("@nestjs/common");
const attribute_kind_service_1 = require("./attribute-kind.service");
const attribute_kind_controller_1 = require("./attribute-kind.controller");
const attribute_kind_entity_1 = require("../entities/attribute-kind.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AttributeKindModule = class AttributeKindModule {
};
AttributeKindModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([attribute_kind_entity_1.AttributeKind])],
        providers: [attribute_kind_service_1.AttributeKindService],
        controllers: [attribute_kind_controller_1.AttributeKindController]
    })
], AttributeKindModule);
exports.AttributeKindModule = AttributeKindModule;
//# sourceMappingURL=attribute-kind.module.js.map