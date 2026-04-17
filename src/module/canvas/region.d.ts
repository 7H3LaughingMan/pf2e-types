import { PlaceablesLayerPointerEvent } from "#client/canvas/layers/base/placeables-layer.mjs";
import { Point } from "#common/_types.mjs";
import { GridSnappingMode } from "#common/constants.mjs";
import { EffectAreaShape } from "#item/types.js";
import { RegionDocumentPF2e } from "#scene/region-document/document.js";
/** Add support for drag/drop repositioning of regions. */
declare class RegionPF2e<TDocument extends RegionDocumentPF2e = RegionDocumentPF2e> extends fc.placeables.Region<TDocument> {
    get snappingMode(): GridSnappingMode;
    get areaShape(): EffectAreaShape | null;
    getSnappedPosition(position?: Point): Point;
    /** Save the coordinates of the new drop location(s). */
    protected _onDragLeftDrop(event: PlaceablesLayerPointerEvent<this>): Promise<TDocument[]>;
}
export { RegionPF2e };
