import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function track(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, track as legacy };
