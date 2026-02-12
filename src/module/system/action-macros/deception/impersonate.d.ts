import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function impersonate(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, impersonate as legacy };
