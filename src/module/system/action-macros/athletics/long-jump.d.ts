import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function longJump(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, longJump as legacy };
