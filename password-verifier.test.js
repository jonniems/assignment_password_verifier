const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
} = require("./password-verifier");

describe("Utility functions", () => {
    //isNotNull testing
    test("isNotNull", () => {
        expect(isNotNull(null)).toBe(false);
    });
    test("isNotNull", () => {
        expect(isNotNull('Blabla')).toBe(true);
    });
    test("isNotNull", () => {
        expect(isNotNull('abracadabra')).toBe(true);
    });
    //hasRightLength testing
    test("hasRightLength", () => {
        expect(hasRightLength('Blabla')).toBe(true);
    });
    test("hasRightLength", () => {
        expect(hasRightLength('abracadabra')).toBe(false);
    });
    test("hasRightLength", () => {
        expect(hasRightLength('Ab1234')).toBe(true);
    });
    //hasUpperCaseCharacter testing
    test("hasUpperCaseCharacter", () => {
        expect(hasUpperCaseCharacter('Blabla')).toBe(true);
    });
    test("hasUpperCaseCharacter", () => {
        expect(hasUpperCaseCharacter('abracadabra')).toBe(false);
    });
    test("hasUpperCaseCharacter", () => {
        expect(hasUpperCaseCharacter('ab1234')).toBe(false);
    });
    //hasLowerCaseCharacter testing
    test("hasLowerCaseCharacter", () => {
        expect(hasLowerCaseCharacter('Blabla')).toBe(true);
    });
    test("hasLowerCaseCharacter", () => {
        expect(hasLowerCaseCharacter('abracadabra')).toBe(true);
    });
    test("hasLowerCaseCharacter", () => {
        expect(hasLowerCaseCharacter('1234')).toBe(false);
    });
    //hasDigit testing
    test("hasDigit", () => {
        expect(hasDigit('Blabla')).toBe(false);
    });
    test("hasDigit", () => {
        expect(hasDigit('abracadabra')).toBe(false);
    });
    test("hasDigit", () => {
        expect(hasDigit('ab1234')).toBe(true);
    });
});

describe("Check Minimum Conditions", () => {
    //Minimum conditions testing
    test("minimumConditionsReached", () => {
        expect(minimumConditionsReached([false,false,true,false,true])).toBe(false);
    });
    test("minimumConditionsReached", () => {
        expect(minimumConditionsReached([true,false,true,false,true])).toBe(true);
    });
    test("minimumConditionsReached", () => {
        expect(minimumConditionsReached([false,true,true,false,false])).toBe(false);
    });
});

describe("verifyPassword", () => {
    //Verify Password testing
    test("verifyPassword", () => {
        expect(verifyPassword('henkie1')).toBe(true);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('1234a')).toBe(true);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('z')).toBe(true);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('henkie1234')).toBe(true);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('HENKhenk')).toBe(true);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('HENK33$')).toBe(false);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('1234')).toBe(false);
    });
    test("verifyPassword", () => {
        expect(verifyPassword('')).toBe(false);
    });
});