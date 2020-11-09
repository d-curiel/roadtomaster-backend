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
exports.ChampionDto = void 0;
const decorators_1 = require("@nestjs/swagger/dist/decorators");
const ultimate_dto_1 = require("./ultimate.dto");
class ChampionDto {
}
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", String)
], ChampionDto.prototype, "name", void 0);
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", String)
], ChampionDto.prototype, "cost", void 0);
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", String)
], ChampionDto.prototype, "icon", void 0);
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", String)
], ChampionDto.prototype, "splashart", void 0);
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", ultimate_dto_1.UltimateDto)
], ChampionDto.prototype, "ultimate", void 0);
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", Array)
], ChampionDto.prototype, "attributes", void 0);
__decorate([
    decorators_1.ApiProperty(),
    __metadata("design:type", Array)
], ChampionDto.prototype, "traits", void 0);
exports.ChampionDto = ChampionDto;
//# sourceMappingURL=champion.dto.js.map