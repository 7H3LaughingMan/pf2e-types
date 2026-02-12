import { ActorPF2e, CharacterPF2e } from "#actor";
import { CraftingAbility } from "#actor/character/crafting/ability.js";
import { ResourceData } from "#actor/creature/index.js";
import { default as ApplicationV2 } from "#client/applications/api/application.mjs";
import { ItemUUID } from "#common/documents/_module.mjs";
import { AbilityItemPF2e, FeatPF2e, PhysicalItemPF2e } from "#item";
import { TraitChatData } from "#item/base/data/index.js";
import { ItemType } from "#item/types.js";
import { Rarity } from "#module/data.js";
import { SvelteApplicationMixin, SvelteApplicationRenderContext } from "#module/sheet/mixin.svelte.js";
import { default as MiniSearch } from "minisearch";

interface FormulaPickerConfiguration extends fa.ApplicationConfiguration {
    actor: CharacterPF2e;
    ability: CraftingAbility;
    item?: FeatPF2e | AbilityItemPF2e;
    mode: "craft" | "prepare";
}

/** Creates a formula picker dialog that resolves with the selected item */
declare class FormulaPicker extends SvelteApplicationMixin<AbstractConstructorOf<ApplicationV2> & { DEFAULT_OPTIONS: DeepPartial<FormulaPickerConfiguration> }>(
    fa.api.ApplicationV2,
) {
    #private;
    static DEFAULT_OPTIONS: {
        id: string;
        position: {
            width: number;
            height: number;
        };
        window: {
            icon: string;
            contentClasses: string[];
            resizable: boolean;
        };
        onSelect: () => void;
        onDeselect: () => void;
    };
    options: FormulaPickerConfiguration;
    root: import("svelte/legacy").LegacyComponentType;
    selection: PhysicalItemPF2e | null;
    constructor(options: Partial<FormulaPickerConfiguration>);
    get title(): string;
    /** Overriden to re-render when the actor re-renders */
    protected _onFirstRender(context: fa.ApplicationRenderContext, options: fa.ApplicationRenderOptions): Promise<void>;
    protected _onClose(options: fa.ApplicationClosingOptions): void;
    resolveSelection(): Promise<PhysicalItemPF2e | null>;
    protected _prepareContext(): Promise<FormulaPickerContext>;
}

interface FormulaPickerContext extends SvelteApplicationRenderContext {
    actor: ActorPF2e;
    ability: CraftingAbility;
    mode: "craft" | "prepare";
    onSelect: (uuid: ItemUUID) => void;
    onDeselect: (uuid: ItemUUID) => void;
    searchEngine: MiniSearch<Pick<PhysicalItemPF2e, "id" | "name">>;
    state: {
        name: string;
        resource: ResourceData | null;
        prompt: string;
        sections: FormulaSection[];
    };
}

interface FormulaSection {
    level: number;
    formulas: {
        item: FormulaViewData;
        /** The batch size or quantity prepared depending on context */
        quantity: number;
        selected: boolean;
    }[];
}

interface FormulaViewData {
    id: string;
    uuid: ItemUUID;
    type: ItemType;
    img: string;
    name: string;
    traits: TraitChatData[];
    level: number | null;
    rarity: Rarity | null;
}

export { FormulaPicker };
export type { FormulaPickerContext };
