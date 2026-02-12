import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function feint(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, feint as legacy };
