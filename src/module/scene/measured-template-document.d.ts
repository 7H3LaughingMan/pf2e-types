import { ActorPF2e } from "#actor";
import { DatabaseCreateCallbackOptions, DatabaseDeleteCallbackOptions, DataModelConstructionContext } from "#common/abstract/_types.mjs";
import { DocumentFlags } from "#common/data/_types.mjs";
import { ItemPF2e } from "#item";
import { EffectAreaShape } from "#item/types.js";
import { MeasuredTemplatePF2e } from "#module/canvas/measured-template.js";
import { ItemOriginFlag } from "#module/chat-message/data.js";
import { ChatMessagePF2e } from "#module/chat-message/document.js";
import { ScenePF2e } from "./document.js";
declare class MeasuredTemplateDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends MeasuredTemplateDocument<TParent> {
    get actor(): ActorPF2e | null;
    get item(): ItemPF2e<ActorPF2e> | null;
    /** The chat message from which this template was spawned */
    get message(): ChatMessagePF2e | null;
    get areaShape(): EffectAreaShape | null;
    /** Ensure the source has a `pf2e` flag along with an `areaShape` if directly inferable. */
    protected _initializeSource(data: object, options?: DataModelConstructionContext<TParent>): this["_source"];
    /** If present, show the clear-template button on the message from which this template was spawned */
    protected _onCreate(data: this["_source"], options: DatabaseCreateCallbackOptions, userId: string): void;
    /** If present, hide the clear-template button on the message from which this template was spawned */
    protected _onDelete(options: DatabaseDeleteCallbackOptions, userId: string): void;
}
interface MeasuredTemplateDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends MeasuredTemplateDocument<TParent> {
    get object(): MeasuredTemplatePF2e<this> | null;
    flags: DocumentFlags & {
        [SYSTEM_ID]: {
            messageId?: string;
            origin?: ItemOriginFlag;
            areaShape: EffectAreaShape | null;
        };
    };
}
export { MeasuredTemplateDocumentPF2e };
