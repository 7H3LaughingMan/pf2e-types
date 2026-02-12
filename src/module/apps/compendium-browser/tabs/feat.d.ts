import { CompendiumBrowser } from "../browser.js";
import { ContentTabName } from "../data.js";
import { CompendiumBrowserTab } from "./base.svelte.js";
import { CompendiumBrowserIndexData, FeatFilters, TraitData } from "./data.js";
export declare class CompendiumBrowserFeatTab extends CompendiumBrowserTab {
    #private;
    tabName: ContentTabName;
    tabLabel: string;
    filterData: FeatFilters;
    searchFields: string[];
    storeFields: string[];
    constructor(browser: CompendiumBrowser);
    protected loadData(): Promise<void>;
    protected filterTraits(traits: string[], selected: TraitData["selected"], condition: TraitData["conjunction"]): boolean;
    protected filterIndexData(entry: CompendiumBrowserIndexData): boolean;
    protected prepareFilterData(): FeatFilters;
}
