import { AbilitySource } from "#item/ability/data.js";
import { AfflictionSource } from "#item/affliction/data.js";
import { AmmoSource } from "#item/ammo/data.js";
import { AncestrySource } from "#item/ancestry/data.js";
import { ArmorSource } from "#item/armor/data.js";
import { BackgroundSource } from "#item/background/data.js";
import { BookSource } from "#item/book/data.js";
import { CampaignFeatureSource } from "#item/campaign-feature/data.js";
import { ClassSource } from "#item/class/data.js";
import { ConditionSource } from "#item/condition/data.js";
import { ConsumableSource } from "#item/consumable/data.js";
import { ContainerSource } from "#item/container/data.js";
import { DeitySource } from "#item/deity/data.js";
import { EffectSource } from "#item/effect/data.js";
import { EquipmentSource } from "#item/equipment/data.js";
import { FeatSource } from "#item/feat/data.js";
import { HeritageSource } from "#item/heritage/data.js";
import { KitSource } from "#item/kit/data.js";
import { LoreSource } from "#item/lore.js";
import { MeleeSource } from "#item/melee/data.js";
import { ShieldSource } from "#item/shield/data.js";
import { SpellSource } from "#item/spell/data.js";
import { SpellcastingEntrySource } from "#item/spellcasting-entry/data.js";
import { TreasureSource } from "#item/treasure/data.js";
import { WeaponSource } from "#item/weapon/data.js";
import { PROFICIENCY_RANKS, Rarity } from "#module/data.js";
import { ItemDescriptionData } from "./system.js";
type ProficiencyRank = (typeof PROFICIENCY_RANKS)[number];
type NonPhysicalItemType =
    | "action"
    | "affliction"
    | "ancestry"
    | "background"
    | "campaignFeature"
    | "class"
    | "condition"
    | "deity"
    | "effect"
    | "feat"
    | "heritage"
    | "kit"
    | "lore"
    | "melee"
    | "spell"
    | "spellcastingEntry";
type AbstractEffectSource = EffectSource | ConditionSource | AfflictionSource;
type PhysicalItemSource =
    | AmmoSource
    | ArmorSource
    | BookSource
    | ConsumableSource
    | ContainerSource
    | EquipmentSource
    | ShieldSource
    | TreasureSource
    | WeaponSource;
type ItemSourcePF2e =
    | PhysicalItemSource
    | AbstractEffectSource
    | AbilitySource
    | AncestrySource
    | BackgroundSource
    | CampaignFeatureSource
    | ClassSource
    | DeitySource
    | FeatSource
    | HeritageSource
    | KitSource
    | LoreSource
    | MeleeSource
    | SpellSource
    | SpellcastingEntrySource;
type MagicItemSource = Exclude<PhysicalItemSource, ConsumableSource | TreasureSource>;
interface RawItemChatData {
    [key: string]: unknown;
    description: ItemDescriptionData;
    rarity?: {
        slug: Rarity;
        label: string;
        description: string;
    } | null;
    traits?: TraitChatData[];
    properties?: string[];
}
interface TraitChatData {
    value: string;
    label: string;
    description?: string;
    mystified?: boolean;
    excluded?: boolean;
}
export type { ActionCost, ActionType, Frequency, FrequencyInterval, FrequencySource, ItemFlagsPF2e, ItemSystemData } from "./system.ts";
export type {
    AbilitySource,
    AbstractEffectSource,
    AncestrySource,
    ArmorSource,
    BackgroundSource,
    BookSource,
    ClassSource,
    ConditionSource,
    ConsumableSource,
    ContainerSource,
    DeitySource,
    EffectSource,
    EquipmentSource,
    FeatSource,
    ItemSourcePF2e,
    KitSource,
    LoreSource,
    MagicItemSource,
    MeleeSource,
    NonPhysicalItemType,
    PhysicalItemSource,
    ProficiencyRank,
    RawItemChatData,
    ShieldSource,
    SpellcastingEntrySource,
    SpellSource,
    TraitChatData,
    TreasureSource,
    WeaponSource,
};
