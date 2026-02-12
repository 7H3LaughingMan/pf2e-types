import { Rolled } from "#client/dice/_module.mjs";
import { DamageRoll } from "./roll.js";
import { DamageDamageContext, DamageTemplate } from "./types.js";
/** Create a chat message containing a damage roll */
export declare class DamagePF2e {
    static roll(
        data: DamageTemplate,
        context: DamageDamageContext,
        callback?: (roll: Rolled<DamageRoll>) => void | Promise<void>,
    ): Promise<Rolled<DamageRoll> | null>;
}
