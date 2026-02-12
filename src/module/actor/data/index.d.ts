import { ArmySource } from "#actor/army/data.js";
import { CharacterSource } from "#actor/character/data.js";
import { FamiliarSource } from "#actor/familiar/data.js";
import { HazardSource } from "#actor/hazard/data.js";
import { LootSource } from "#actor/loot/data.js";
import { NPCSource } from "#actor/npc/data.js";
import { PartySource } from "#actor/party/data.js";
import { VehicleSource } from "#actor/vehicle/data.js";
import { RollInitiativeOptions } from "#client/documents/combat.mjs";
import { StatisticRollParameters } from "#system/statistic/index.js";
type CreatureSource = CharacterSource | NPCSource | FamiliarSource;
type ActorSourcePF2e = ArmySource | CreatureSource | HazardSource | LootSource | PartySource | VehicleSource;
interface RollInitiativeOptionsPF2e extends RollInitiativeOptions, StatisticRollParameters {
    secret?: boolean;
}
export type {
    ActorSourcePF2e,
    ArmySource,
    CharacterSource,
    CreatureSource,
    FamiliarSource,
    HazardSource,
    LootSource,
    NPCSource,
    PartySource,
    RollInitiativeOptionsPF2e,
    VehicleSource,
};
