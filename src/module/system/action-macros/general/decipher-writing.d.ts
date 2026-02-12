import { SingleCheckAction, SingleCheckActionVariant, SingleCheckActionVariantData } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function decipherWriting(options: SkillActionOptions): void;
declare class DecipherWritingAction extends SingleCheckAction {
    constructor();
    protected toActionVariant(data?: SingleCheckActionVariantData): SingleCheckActionVariant;
}
declare const action: DecipherWritingAction;
export { action, decipherWriting as legacy };
