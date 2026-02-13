import * as fs from "fs";
import { glob } from "glob";

let files = await glob("./module/**/*.d.ts", {
    cwd: "./src",
    dotRelative: true,
    ignore: ["./module/migration/**", "./module/system/action-macros/**"],
    posix: true,
});

files.push("./global.d.ts", "./module/system/action-macros/index.d.ts", "./scripts/config/index.d.ts", "./scripts/config/traits.d.ts");

files.sort((a, b) => {
    const a_parts = a.split("/");
    const b_parts = b.split("/");

    for (let index = 0; index < Math.max(a_parts.length, b_parts.length); index++) {
        const a_part = a_parts[index];
        const b_part = b_parts[index];

        if (!a_part && !b_part) break;

        if (!a_part || !b_parts) {
            if (!a_part) return -1;

            if (!b_parts) return 1;
        }

        const part_compare = a_part.localeCompare(b_part);
        if (part_compare !== 0) return part_compare;
    }

    return 0;
});

files = files.filter((value) => !value.endsWith(".svelte.d.ts"));

files.forEach((value, index, array) => {
    array[index] = `export type * from "${value}";`;
});

files.unshift(
    'export type { ActionCost } from "./module/item/base/data/system.d.ts";',
    'export type { HitPointsStatistic } from "./module/system/statistic/hit-points.d.ts";',
    "",
);

files.push("");

fs.writeFileSync("./src/global-exports.d.ts", files.join("\n"));
