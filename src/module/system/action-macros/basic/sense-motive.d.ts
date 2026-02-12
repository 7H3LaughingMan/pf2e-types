import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function senseMotive(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, senseMotive as legacy };
