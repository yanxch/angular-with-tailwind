"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MATCH_BLOG_CODES = /(<blog-code(.*?)>)([\s\S]*?)(<\/blog-code>)/g;
//    $1       $2       $3          $4
// $1 Opening Code Tag
// $2 Any attribute 
// $3 Anything between including newlines
// $4 Closing Code Tag
const OPENING_BRACET_PRESTEP = '@@BO@@';
const CLOSING_BRACET_PRESTEP = '@@BC@@';
const OPENING_BRACET_PRESTEP_REGEXP = /@@BO@@/gi;
const CLOSING_BRACET_PRESTEP_REGEXP = /@@BC@@/gi;
const OPENING_BRACET_REGEXP = /\{/gi;
const CLOSING_BRACET_REGEXP = /\}/gi;
const OPENING_BRACET = '{{\'{\'}}';
const CLOSING_BRACET = '{{\'}\'}}';
function transformHtmlLoader(source) {
    return source.replace(MATCH_BLOG_CODES, replaceBraces);
}
exports.default = transformHtmlLoader;
function replaceBraces(fullmatch, open, noop, code, close) {
    code = escapeHtml(code);
    // Step 1 - Replace with distinct characters
    code = code.replace(OPENING_BRACET_REGEXP, OPENING_BRACET_PRESTEP);
    code = code.replace(CLOSING_BRACET_REGEXP, CLOSING_BRACET_PRESTEP);
    // Step 2 - Replace with correct escaping
    code = code.replace(OPENING_BRACET_PRESTEP_REGEXP, OPENING_BRACET);
    code = code.replace(CLOSING_BRACET_PRESTEP_REGEXP, CLOSING_BRACET);
    return open + code + close;
}
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
//# sourceMappingURL=escapeBraces.js.map