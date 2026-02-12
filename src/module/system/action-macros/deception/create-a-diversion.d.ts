import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const CREATE_A_DIVERSION_VARIANTS: readonly ["distracting-words", "gesture", "trick"];
type CreateADiversionVariant = (typeof CREATE_A_DIVERSION_VARIANTS)[number];
declare function createADiversion(
    options: {
        variant: CreateADiversionVariant;
    } & SkillActionOptions,
): void;
declare const action: SingleCheckAction;
export { action, createADiversion as legacy };
