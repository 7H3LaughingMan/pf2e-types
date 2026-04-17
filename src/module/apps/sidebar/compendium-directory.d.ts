import { ApplicationConfiguration, ApplicationRenderContext } from "#client/applications/_types.mjs";
import { HandlebarsRenderOptions } from "#client/applications/api/handlebars-application.mjs";
import { CompendiumDirectoryRenderContext } from "#client/applications/sidebar/tabs/compendium-directory.mjs";
import { ContextMenuEntry } from "#client/applications/ux/context-menu.mjs";
/** Extend CompendiumDirectory to support a search bar */
export declare class CompendiumDirectoryPF2e extends fa.sidebar.tabs.CompendiumDirectory {
    #private;
    static DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>;
    protected _preparePartContext(
        partId: string,
        context: CompendiumDirectoryRenderContext,
        options: HandlebarsRenderOptions,
    ): Promise<CompendiumDirectoryRenderContext>;
    protected _onFirstRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    protected _getEntryContextOptions(): ContextMenuEntry[];
}
