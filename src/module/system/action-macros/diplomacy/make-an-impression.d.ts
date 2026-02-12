import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function makeAnImpression(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, makeAnImpression as legacy };
