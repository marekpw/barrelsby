import {Options} from "../options";
import {Directory, Location, nonAlphaNumeric, toCamelCase} from "../utilities";

import {buildImportPath, getBasename} from "../builder";

export function buildAliasBarrel(directory: Directory, modules: Location[], options: Options): string {
    let content = "";
    const exports: string[] = [];
    modules.forEach((current: Location) => {
        const importPath = buildImportPath(directory, current, options);
        options.logger(`Including path ${importPath}`);

        const validPath = getBasename(importPath).replace(nonAlphaNumeric, "-").replace("_", "-");
        const alias = toCamelCase(validPath);
        const path = `${options.quoteCharacter}${importPath}${options.quoteCharacter}`;

        content += `import * as ${alias} from ${path};
`;
        exports.push(alias);
    });

    content += `
export {
  ${exports.join(",\n  ")}
};
`;

    return content;
}
