import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function reposition(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, reposition as legacy };
