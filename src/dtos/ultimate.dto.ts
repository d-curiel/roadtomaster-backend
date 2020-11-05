import { UltimateAttributeDto } from "./ultimate-attribute-dto";

export class UltimateDto {
  name: string;

  description: string;

  kind: string;
  
  icon: string;

  attributes: UltimateAttributeDto[];
}
