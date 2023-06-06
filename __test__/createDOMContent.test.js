import { alertIfError } from "../src/client/js/formHandler"

describe("alertIfError() testing", () => {
    test("Invalid value false", () => {
        let value = false;
        expect(alertIfError(value)).toBe(false);
    });
    test("Correct value", () => {
        let value = true;
        expect(alertIfError(value)).toBe(true);
    });
});