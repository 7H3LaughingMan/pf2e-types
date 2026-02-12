import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function tumbleThrough(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, tumbleThrough as legacy };
