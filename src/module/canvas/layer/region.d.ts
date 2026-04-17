import { RegionDocumentPF2e } from "#scene";
import { RegionPF2e } from "../index.js";
export declare class RegionLayerPF2e extends fc.layers.RegionLayer<RegionPF2e> {
    placeRegion(data: DeepPartial<fd.RegionSource>, options?: fc.layers.RegionPlacementOptions<RegionPF2e>): Promise<RegionDocumentPF2e | null>;
}
