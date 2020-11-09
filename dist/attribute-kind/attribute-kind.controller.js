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
exports.AttributeKindController = void 0;
const common_1 = require("@nestjs/common");
const attribute_kind_dto_1 = require("../dtos/attribute-kind.dto");
const attribute_kind_entity_1 = require("../entities/attribute-kind.entity");
const attribute_kind_service_1 = require("./attribute-kind.service");
let AttributeKindController = class AttributeKindController {
    constructor(service) {
        this.service = service;
    }
    getAllByKind(kind) {
        return this.service.getAllByKind(kind);
    }
    create(attributeKind) {
        return this.service.create(attributeKind);
    }
};
__decorate([
    common_1.Get(':kind'),
    __param(0, common_1.Param('kind')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttributeKindController.prototype, "getAllByKind", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attribute_kind_dto_1.AttributeKindDto]),
    __metadata("design:returntype", void 0)
], AttributeKindController.prototype, "create", null);
AttributeKindController = __decorate([
    common_1.Controller('attribute-kind'),
    __metadata("design:paramtypes", [attribute_kind_service_1.AttributeKindService])
], AttributeKindController);
exports.AttributeKindController = AttributeKindController;
//# sourceMappingURL=attribute-kind.controller.js.map