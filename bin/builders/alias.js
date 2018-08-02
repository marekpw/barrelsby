"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const builder_1 = require("../builder");
function buildAliasBarrel(directory, modules, options) {
    let content = "";
    const exports = [];
    modules.forEach((current) => {
        const importPath = builder_1.buildImportPath(directory, current, options);
        options.logger(`Including path ${importPath}`);
        const validPath = builder_1.getBasename(importPath).replace(utilities_1.nonAlphaNumeric, "-").replace("_", "-");
        const alias = utilities_1.toCamelCase(validPath);
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
exports.buildAliasBarrel = buildAliasBarrel;
//# sourceMappingURL=alias.js.map