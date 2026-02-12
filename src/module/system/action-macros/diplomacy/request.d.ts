import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function request(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, request as legacy };
