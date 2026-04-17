import { RawModifier, StatisticModifier } from "#actor/modifiers.js";
import { ApplicationV1Options } from "#client/appv1/api/application-v1.mjs";
import { ChatMessageMode } from "#client/config.mjs";
import { RollSubstitution } from "#module/rules/synthetics.js";
import { CheckCheckContext } from "./types.js";
/**
 * Dialog for excluding certain modifiers before rolling a check.
 * @category Other
 */
export declare class CheckModifiersDialog extends fav1.api.Application {
    #private;
    /** The check which is being edited. */
    check: StatisticModifier;
    /** Relevant context for this roll, like roll options. */
    context: CheckCheckContext;
    /** A Promise resolve method */
    resolve: (value: boolean) => void;
    /** Has the promise been resolved? */
    isResolved: boolean;
    constructor(check: StatisticModifier, resolve: (value: boolean) => void, context?: CheckCheckContext);
    static get defaultOptions(): ApplicationV1Options;
    getData(): Promise<CheckDialogData>;
    activateListeners($html: JQuery): void;
    close(options?: { force?: boolean }): Promise<void>;
    /** Focus the submit button to allow for submission via spacebar press. */
    protected _injectHTML($html: JQuery<HTMLElement>): void;
}
interface CheckDialogData {
    appId: string;
    modifiers: RawModifier[];
    totalModifier: number;
    messageModes: Record<ChatMessageMode, string>;
    messageMode: ChatMessageMode;
    showCheckDialogs: boolean;
    substitutions: RollSubstitutionDialogData[];
    fortune: boolean;
    none: boolean;
    misfortune: boolean;
}
interface RollSubstitutionDialogData extends RollSubstitution {
    toggleable: boolean;
}
export {};
