import { ItemSheetOptions } from "#item/base/sheet/sheet.js";
import { PhysicalItemSheetData, PhysicalItemSheetPF2e } from "#item/physical/index.js";
import { TreasureSystemSchema } from "./data.js";
import { TreasurePF2e } from "./document.js";
import { TreasureCategory } from "./types.js";
export declare class TreasureSheetPF2e extends PhysicalItemSheetPF2e<TreasurePF2e> {
    getData(options?: Partial<ItemSheetOptions>): Promise<TreasureSheetData>;
}
interface TreasureSheetData extends PhysicalItemSheetData<TreasurePF2e> {
    currencies: ConfigPF2e["PF2E"]["currencies"];
    categories: Record<TreasureCategory, string>;
    systemFields: TreasureSystemSchema;
}
export {};
