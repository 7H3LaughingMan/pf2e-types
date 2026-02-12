import { SingleCheckAction } from "#actor/actions/index.js";
import { SkillActionOptions } from "../index.js";
declare function commandAnAnimal(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, commandAnAnimal as legacy };
