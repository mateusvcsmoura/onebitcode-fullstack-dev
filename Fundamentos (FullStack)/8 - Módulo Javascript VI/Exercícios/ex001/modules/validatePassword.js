module.exports = function validatePassword(string) {
    const stringFixed = string.replace(/\s+/g, "");

    const hasEnoughLength = stringFixed.match(/^.{8,}$/gmi)?.[0];
    const hasUppercaseAndLowerCase = stringFixed.match(/^(?=.*[a-z])(?=.*[A-Z]).+$/gm)?.[0];
    const hasNumber = stringFixed.match(/^(?=.*\d).+$/gm)?.[0];
    const hasSpecialChar = stringFixed.match(/^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/gm)?.[0];

    if (!hasEnoughLength) {
        throw new Error("arguments must have 8 length");
    } else if (!hasUppercaseAndLowerCase) {
        throw new Error("arguments must have uppercase and lowercase characters");
    } else if (!hasNumber) {
        throw new Error("arguments must have a number");
    } else if (!hasSpecialChar) {
        throw new Error("arguments must have a special character");
    }

    return stringFixed;
}
