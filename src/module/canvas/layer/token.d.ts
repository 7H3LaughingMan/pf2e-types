import { PlaceablesLayerPointerEvent } from "#client/canvas/layers/base/placeables-layer.mjs";
import { Point } from "#common/_types.mjs";
import { TokenPF2e } from "../index.js";
declare class TokenLayerPF2e<TObject extends TokenPF2e> extends fc.layers.TokenLayer<TObject> {
    #private;
    constructor();
    /** Prevent redirection of event to `Ruler` when ctrl key is pressed. */
    protected _onClickLeft(event: PlaceablesLayerPointerEvent<TObject>): void;
    /** Reimplementation to avoid warning for troop tokens unless it is the last segment of the troop  */
    protected _confirmDeleteKey(documents: TObject["document"][]): Promise<boolean>;
    /** Cycle Z indices of a hovered token stack. */
    cycleStack(): boolean;
    refreshDistanceLine(): void;
    refreshDistanceLine(from: TObject, to: TObject): Point;
}
export { TokenLayerPF2e };
