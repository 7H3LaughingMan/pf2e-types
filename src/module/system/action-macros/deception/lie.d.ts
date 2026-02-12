import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function lie(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, lie as legacy };
