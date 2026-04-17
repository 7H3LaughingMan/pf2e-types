import { DocumentConstructionContext } from "#common/_types.mjs";
import { DatabaseCreateCallbackOptions, DatabaseDeleteCallbackOptions } from "#common/abstract/_module.mjs";
import { default as EmbeddedCollection } from "#common/abstract/embedded-collection.mjs";
import { DocumentFlags } from "#common/data/_types.mjs";
import { EffectAreaShape } from "#item/types.js";
import { RegionPF2e } from "#module/canvas/region.js";
import { ItemOriginFlag } from "#module/chat-message/data.js";
import { ChatMessagePF2e } from "#module/chat-message/document.js";
import { ScenePF2e } from "#scene";
import { SpecificRegionBehavior } from "#scene/region-behavior/types.js";
declare class RegionDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends RegionDocument<TParent> {
    /** The chat message from which this effect area was spawned */
    get message(): ChatMessagePF2e | null;
    /** The region's game-mechanical shape if it is an effect area */
    get areaShape(): EffectAreaShape | null;
    /** Whether this region is a Pathfinder 2e effect area */
    get isEffectArea(): boolean;
    /** Ensure the source has a `pf2e` flag along with an `areaShape` if directly inferable. */
    protected _initializeSource(data: object, options?: DocumentConstructionContext<TParent>): this["_source"];
    /** If present, show the clear-template button on the message from which this template was spawned */
    protected _onCreate(data: this["_source"], options: DatabaseCreateCallbackOptions, userId: string): void;
    /** If present, hide the clear-template button on the message from which this template was spawned */
    protected _onDelete(options: DatabaseDeleteCallbackOptions, userId: string): void;
}
interface RegionDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends RegionDocument<TParent> {
    readonly behaviors: EmbeddedCollection<SpecificRegionBehavior<this>>;
    get object(): RegionPF2e<this>;
    flags: DocumentFlags & {
        [SYSTEM_ID]: {
            messageId?: string;
            origin?: ItemOriginFlag;
            areaShape: EffectAreaShape | null;
        };
    };
}
export { RegionDocumentPF2e };
