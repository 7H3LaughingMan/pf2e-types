import { CreatureConfig, CreatureConfigData } from "#actor/creature/config.js";
import { DocumentSheetV1Options } from "#client/appv1/api/document-sheet-v1.mjs";
import { CharacterPF2e } from "./document.js";
export declare class CharacterConfig extends CreatureConfig<CharacterPF2e> {
    getData(options?: Partial<DocumentSheetV1Options>): Promise<PCConfigData>;
}
interface PCConfigData extends CreatureConfigData<CharacterPF2e> {
    showBasicUnarmed: boolean;
}
export {};
