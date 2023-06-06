import { checkUrl } from "../src/client/js/checkUrl"

describe("checkUrl() testing", () => {
    test("Dot excese test", () => {
        let url = 'www..google.com'
        expect(checkUrl(url)).toBe(false);
    });
    test("Header w text", () => {
        let url = 'google.com'
        expect(checkUrl(url)).toBe(false);
    });
    test("N tester", () => {
        let url = 'www.google.con'
        expect(checkUrl(url)).toBe(false);
    });
    test("Space check", () => {
        let url = 'https://www.google/ search.com'
        expect(checkUrl(url)).toBe(false);
    });
    test("No https/http", () => {
        let url = 'www.google.com'
        expect(checkUrl(url)).toBe(false);
    });
    test("Testing for valid url", () => {
        let url = 'https://www.google.com/'
        expect(checkUrl(url)).toBe(true);
    });
});