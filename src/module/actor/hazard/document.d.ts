import { ActorPF2e } from "#actor";
import { SaveType } from "#actor/types.js";
import { ConditionPF2e } from "#item";
import { ItemType } from "#item/types.js";
import { Rarity } from "#module/data.js";
import { TokenDocumentPF2e } from "#scene/index.js";
import { DamageType } from "#system/damage/index.js";
import { Statistic } from "#system/statistic/index.js";
import { HazardSource, HazardSystemData } from "./data.js";
declare class HazardPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    skills: Record<"stealth", Statistic<this>>;
    get allowedItemTypes(): (ItemType | "physical")[];
    get rarity(): Rarity;
    get isComplex(): boolean;
    get hardness(): number;
    get hasDefenses(): boolean;
    /** Minimal check since the disabled status of a hazard isn't logged */
    get canAttack(): boolean;
    get emitsSound(): boolean;
    isAffectedBy(effect: DamageType | ConditionPF2e): boolean;
    prepareBaseData(): void;
    prepareDerivedData(): void;
    /**
     * Some hazards have an implicit immunity exception to certain damage types despite having object immunities: use a
     * weakness or resistance as indication.
     */
    prepareData(): void;
    private prepareSaves;
}
interface HazardPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    readonly _source: HazardSource;
    system: HazardSystemData;
    saves: {
        [K in SaveType]?: Statistic;
    };
}
export { HazardPF2e };
