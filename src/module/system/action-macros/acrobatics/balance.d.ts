import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function balance(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, balance as legacy };
