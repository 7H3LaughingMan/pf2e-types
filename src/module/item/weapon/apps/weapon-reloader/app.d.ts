import { CharacterPF2e } from "#actor/character/document.js";
import { WeaponPF2e } from "#item";
import { ValueAndMax } from "#module/data.js";
import { BasePhysicalItemViewData } from "#module/sheet/helpers.js";
import { SvelteApplicationMixin, SvelteApplicationRenderContext } from "#module/sheet/mixin.svelte.js";

interface WeaponReloaderConfiguration extends fa.ApplicationConfiguration {
    weapon: WeaponPF2e<CharacterPF2e>;
}

declare class WeaponReloader extends SvelteApplicationMixin<
    AbstractConstructorOf<fa.api.ApplicationV2> & { DEFAULT_OPTIONS: DeepPartial<WeaponReloaderConfiguration> }
>(fa.api.ApplicationV2) {
    #private;
    constructor(
        options: DeepPartial<WeaponReloaderConfiguration> & {
            anchor: HTMLElement | null;
        },
    );
    static DEFAULT_OPTIONS: DeepPartial<fa.ApplicationConfiguration>;
    options: WeaponReloaderConfiguration;
    root: import("svelte/legacy").LegacyComponentType;
    get glyph(): string | null;
    protected _initializeApplicationOptions(
        options: DeepPartial<fa.ApplicationConfiguration> & Partial<Pick<WeaponReloaderConfiguration, "weapon">>,
    ): fa.ApplicationConfiguration;
    protected _prepareContext(): Promise<ReloadWeaponContext>;
    reloadWeapon(ammoId: string, all?: boolean): Promise<void>;
    protected _prePosition(position: fa.ApplicationPosition): void;
    protected _onFirstRender(context: WeaponReloaderConfiguration, options: fa.ApplicationRenderOptions): Promise<void>;
    protected _tearDown(options: fa.ApplicationClosingOptions): void;
}

interface ReloadWeaponContext extends SvelteApplicationRenderContext {
    foundryApp: WeaponReloader;
    state: {
        loaded: ValueAndMax;
        weapon: BasePhysicalItemViewData;
        compatible: AmmoChoiceViewData[];
    };
}

interface AmmoChoiceViewData extends BasePhysicalItemViewData {
    quantity: number;
    uses: ValueAndMax | null;
    depleted: boolean;
}

export { WeaponReloader };
export type { ReloadWeaponContext };
