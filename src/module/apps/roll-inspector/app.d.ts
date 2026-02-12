import { RawDamageDice, RawModifier } from "#actor/modifiers.js";
import { ApplicationConfiguration } from "#client/applications/_types.mjs";
import { ChatContextFlag } from "#module/chat-message/data.js";
import { ChatMessagePF2e } from "#module/chat-message/document.js";
import { SvelteApplicationMixin, SvelteApplicationRenderContext } from "#module/sheet/mixin.svelte.js";

declare class RollInspector extends SvelteApplicationMixin(fa.api.ApplicationV2) {
    static DEFAULT_OPTIONS: {
        position: {
            width: number;
            height: number;
        };
        window: {
            icon: string;
            title: string;
            resizable: boolean;
        };
    };
    protected root: import("svelte/legacy").LegacyComponentType;
    message: ChatMessagePF2e;
    constructor(
        options: DeepPartial<ApplicationConfiguration> & {
            message: ChatMessagePF2e;
        },
    );
    protected _prepareContext(): Promise<RollInspectorContext>;
}

interface RollInspectorContext extends SvelteApplicationRenderContext {
    state: RollInspectorState;
}

interface RollInspectorState {
    context: ChatContextFlag;
    domains: string[];
    modifiers: RawModifier[];
    dice: RawDamageDice[];
    rollOptions: string[];
    contextualOptions: {
        header: string;
        options: string[];
    }[];
}

export { RollInspector };
export type { RollInspectorContext };
