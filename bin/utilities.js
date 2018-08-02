"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Convert path separator from windows to unix */
function convertPathSeparator(path) {
    return path.replace(/\\+/g, "/");
}
exports.convertPathSeparator = convertPathSeparator;
function toCamelCase(name) {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
exports.toCamelCase = toCamelCase;
exports.isTypeScriptFile = /\.tsx?$/m;
exports.nonAlphaNumeric = /\W+/g;
exports.thisDirectory = /^\.[\\\/]/g;
exports.indentation = "  ";
//# sourceMappingURL=utilities.js.map