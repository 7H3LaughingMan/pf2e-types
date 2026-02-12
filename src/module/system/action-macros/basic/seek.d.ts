import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function seek(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, seek as legacy };
