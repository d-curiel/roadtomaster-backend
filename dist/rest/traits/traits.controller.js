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
exports.TraitsController = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const swagger_1 = require("@nestjs/swagger");
const trait_dto_1 = require("../../dtos/trait.dto");
const traits_service_1 = require("./traits.service");
let TraitsController = class TraitsController {
    constructor(traitService) {
        this.traitService = traitService;
    }
    findAll() {
        return this.traitService.findAll();
    }
    create(trait) {
        this.traitService.create(trait);
    }
};
__decorate([
    request_mapping_decorator_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TraitsController.prototype, "findAll", null);
__decorate([
    request_mapping_decorator_1.Post(),
    swagger_1.ApiBody({ type: [trait_dto_1.TraitDto] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trait_dto_1.TraitDto]),
    __metadata("design:returntype", void 0)
], TraitsController.prototype, "create", null);
TraitsController = __decorate([
    swagger_1.ApiTags('traits'),
    common_1.Controller('traits'),
    __metadata("design:paramtypes", [traits_service_1.TraitsService])
], TraitsController);
exports.TraitsController = TraitsController;
//# sourceMappingURL=traits.controller.js.map