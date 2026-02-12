import { AbstractEffectPF2e } from "#item/index.js";
import { DurationData } from "./data.js";
export declare function calculateRemainingDuration(
    effect: AbstractEffectPF2e,
    durationData: DurationData,
): {
    expired: boolean;
    remaining: number;
};
