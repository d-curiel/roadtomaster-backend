import { Ultimate } from './ultimate.entity';
export declare class Champion {
    constructor(name: any, cost: any, icon: any, splashart: any);
    id: number;
    name: string;
    cost: string;
    icon: string;
    splashart: string;
    id_ultimate: number;
    ultimate: Ultimate;
}
