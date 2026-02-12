import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function forceOpen(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, forceOpen as legacy };
