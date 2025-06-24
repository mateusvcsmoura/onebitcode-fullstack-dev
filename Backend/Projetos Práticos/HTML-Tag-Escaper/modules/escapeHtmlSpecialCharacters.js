function escapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            default:
                return match;
        }
    });
}

module.exports = escapeHtmlSpecialCharacters;