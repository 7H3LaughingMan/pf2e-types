import * as fs from "fs";
import { glob } from "glob";

const files = await glob("./src/**/*.d.ts", { dotRelative: true, ignore: ["./src/index.d.ts"], posix: true });

for (const file of files) {
    let data = fs.readFileSync(file, "utf-8");

    // Import - Double Quotes
    data = data.replace(/^import (.*?) from '(.*?)';$/gm, `import $1 from "$2";`);
    data = data.replace(/import\('(.*?)'\)/gm, `import("$1")`);

    // Import - *.d.ts
    data = data.replace(/^import (.*?) from "(.*?)\.d\.ts";$/gm, `import $1 from "$2.js";`);

    // Import - *.ts
    data = data.replace(/^import (.*?) from "(.*?)\.ts";$/gm, `import $1 from "$2.js";`);

    // Import - *.d.mts
    data = data.replace(/^import (.*?) from "(.*?)\.d\.mts";$/gm, `import $1 from "$2.mjs";`);

    // Import - *.mts
    data = data.replace(/^import (.*?) from "(.*?)\.mts";$/gm, `import $1 from "$2.mjs";`);

    // Import - @actor
    data = data.replace(/"@actor"/gm, `"#actor"`);

    // Import - @actor/*
    data = data.replace(/"@actor\/(.*?)"/gm, `"#actor/$1"`);

    // Import - @item
    data = data.replace(/"@item"/gm, `"#item"`);

    // Import - @item/*
    data = data.replace(/"@item\/(.*?)"/gm, `"#item/$1"`);

    // Import - @scene
    data = data.replace(/"@scene"/gm, `"#scene"`);

    // Import - @scene/*
    data = data.replace(/"@scene\/(.*?)"/gm, `"#scene/$1"`);

    // Import - @system
    data = data.replace(/"@system"/gm, `"#system"`);

    // Import - @system/*
    data = data.replace(/"@system\/(.*?)"/gm, `"#system/$1"`);

    // Import - @module/*
    data = data.replace(/"@module\/(.*?)"/gm, `"#module/$1"`);

    // Import - @scripts/*
    data = data.replace(/"@scripts\/(.*?)"/gm, `"#scripts/$1"`);

    // Import - @common/*
    data = data.replace(/"@common\/(.*?)"/gm, `"#common/$1"`);

    // Import - @client/*
    data = data.replace(/"@client\/(.*?)"/gm, `"#client/$1"`);

    // Import - @util
    data = data.replace(/"@util"/gm, `"#util"`);

    // Import - @util/*
    data = data.replace(/"@util\/(.*?)"/gm, `"#util/$1"`);

    fs.writeFileSync(file, data, "utf-8");
}
