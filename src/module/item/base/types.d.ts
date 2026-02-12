import { CreatureTrait } from "#actor/creature/types.js";
import { AbilityTrait } from "#item/ability/types.js";
import { KingmakerTrait } from "#item/campaign-feature/types.js";
import { NPCAttackTrait } from "#item/melee/types.js";
import { PhysicalItemTrait } from "#item/physical/types.js";
type ItemTrait = AbilityTrait | CreatureTrait | PhysicalItemTrait | NPCAttackTrait | KingmakerTrait;
export type { ItemTrait };
