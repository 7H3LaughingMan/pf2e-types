import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function coerce(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, coerce as legacy };
