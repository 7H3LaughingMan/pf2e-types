import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function highJump(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, highJump as legacy };
