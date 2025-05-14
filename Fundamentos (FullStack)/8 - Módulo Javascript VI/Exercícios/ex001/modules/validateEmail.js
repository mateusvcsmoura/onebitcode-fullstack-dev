module.exports = function validateEmail(string) {
    const stringFixed = string.replace(/\s+/g, "");

    const beforeAt = stringFixed.match(/^.{2,}(?=@)/)?.[0];
    const afterAt = stringFixed.match(/(?<=@).{2,}(?=\.)/)?.[0];
    const afterDot = stringFixed.match(/(?<=\.)[a-zA-Z]{2,}$/)?.[0];

    if (!beforeAt) {
        throw new Error("arguments must have 2 length before @");
    } else if (!afterAt) {
        throw new Error("arguments must have 2 length after @");
    } else if (!afterDot) {
        throw new Error("arguments must have 2 length after .");
    }

    return (beforeAt + afterAt + afterDot).toString();
}
