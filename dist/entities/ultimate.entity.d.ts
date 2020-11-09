import { Champion } from './champion.entity';
import { UltimateAttribute } from './ultimate-attribute.entity';
export declare class Ultimate {
    constructor(name: any, description: any, kind: any, icon: any);
    id: number;
    name: string;
    description: string;
    kind: string;
    icon: string;
    champion: Champion;
    attributes: UltimateAttribute[];
}
