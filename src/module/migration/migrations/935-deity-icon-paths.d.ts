import { ActorSourcePF2e } from "#actor/data/index.js";
import { TokenSource } from "#common/documents/token.mjs";
import { ItemSourcePF2e } from "#item/base/data/index.js";
import { MigrationBase } from "../base.js";
/** Clean up Calling items, setting a category and removing tags */
export declare class Migration935DeityIconPaths extends MigrationBase {
    #private;
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
    updateItem(source: ItemSourcePF2e): Promise<void>;
    updateToken(source: TokenSource): Promise<void>;
}
