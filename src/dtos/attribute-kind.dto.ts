import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class AttributeKindDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  unit: string;
  @ApiProperty()
  kind: string;
}
