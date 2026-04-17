import { DataModelSchemaField } from "#common/data/fields.mjs";
import { RuleElement } from "./rule-element/base.js";
import { RuleElementOptions, RuleElementSource } from "./rule-element/index.js";
export type { RuleElementSynthetics } from "./synthetics.ts";
export { RuleElement, RuleElementOptions, RuleElements, RuleElementSource };
/**
 * @category RuleElement
 */
declare class RuleElements {
    static readonly builtin: Record<string, RuleElementConstructor>;
    static custom: Record<string, RuleElementConstructor>;
    static get all(): Record<string, RuleElementConstructor>;
    static fromOwnedItem(options: RuleElementOptions): RuleElement[];
}
type RuleElementConstructor = {
    schema: DataModelSchemaField;
    LOCALIZATION_PREFIXES: string[];
} & (new (data: RuleElementSource, options: RuleElementOptions) => RuleElement);
