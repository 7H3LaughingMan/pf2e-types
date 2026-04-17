import { ActorPF2e } from "#actor/base.js";
import { ItemPF2e } from "#item/base/document.js";
import { ActiveEffectPF2e } from "#module/active-effect.js";
import { ChatMessagePF2e } from "#module/chat-message/document.js";
import { CombatantPF2e } from "#module/encounter/combatant.js";
import { EncounterPF2e } from "#module/encounter/document.js";
import { MacroPF2e } from "#module/macro.js";
import { UserPF2e } from "#module/user/document.js";
import { AmbientLightDocumentPF2e } from "#scene/ambient-light-document.js";
import { ScenePF2e } from "#scene/document.js";
import { RegionBehaviorPF2e } from "#scene/region-behavior/document.js";
import { RegionDocumentPF2e } from "#scene/region-document/document.js";
import { TileDocumentPF2e } from "#scene/tile-document.js";
import { TokenDocumentPF2e } from "#scene/token-document/document.js";

declare global {
    type DocumentTypeMap = {
        ActiveEffect: typeof ActiveEffectPF2e;
        Actor: typeof ActorPF2e;
        ActorDelta: typeof foundry.documents.ActorDelta;
        Adventure: typeof foundry.documents.Adventure;
        AmbientLight: typeof AmbientLightDocumentPF2e;
        AmbientSound: typeof foundry.documents.AmbientSoundDocument;
        Card: typeof foundry.documents.Card;
        Cards: typeof foundry.documents.Cards;
        ChatMessage: typeof ChatMessagePF2e;
        Combat: typeof EncounterPF2e;
        Combatant: typeof CombatantPF2e;
        CombatantGroup: typeof foundry.documents.CombatantGroup;
        Drawing: typeof foundry.documents.DrawingDocument;
        FogExploration: typeof foundry.documents.FogExploration;
        Folder: typeof foundry.documents.Folder;
        Item: typeof ItemPF2e;
        JournalEntry: typeof foundry.documents.JournalEntry;
        JournalEntryCategory: typeof foundry.documents.JournalEntryCategory;
        JournalEntryPage: typeof foundry.documents.JournalEntryPage;
        Macro: typeof MacroPF2e;
        Note: typeof foundry.documents.NoteDocument;
        Playlist: typeof foundry.documents.Playlist;
        PlaylistSound: typeof foundry.documents.PlaylistSound;
        Region: typeof RegionDocumentPF2e;
        RegionBehavior: typeof RegionBehaviorPF2e;
        RollTable: typeof foundry.documents.RollTable;
        Scene: typeof ScenePF2e;
        Setting: typeof foundry.documents.Setting;
        TableResult: typeof foundry.documents.TableResult;
        Tile: typeof TileDocumentPF2e;
        Token: typeof TokenDocumentPF2e;
        User: typeof UserPF2e;
        Wall: typeof foundry.documents.WallDocument;
    };

    function getDocumentClass<K extends keyof DocumentTypeMap>(name: K): DocumentTypeMap[K];
}
