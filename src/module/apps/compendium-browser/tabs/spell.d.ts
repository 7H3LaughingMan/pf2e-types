import { CompendiumBrowser } from "../browser.js";
import { ContentTabName } from "../data.js";
import { CompendiumBrowserTab } from "./base.svelte.js";
import { CompendiumBrowserIndexData, SpellFilters } from "./data.js";
export declare class CompendiumBrowserSpellTab extends CompendiumBrowserTab {
    tabName: ContentTabName;
    tabLabel: string;
    filterData: SpellFilters;
    searchFields: string[];
    storeFields: string[];
    constructor(browser: CompendiumBrowser);
    protected loadData(): Promise<void>;
    protected filterIndexData(indexData: CompendiumBrowserIndexData): boolean;
    protected prepareFilterData(): SpellFilters;
}
