import { codeBreaker } from "../codeBreaker";

test("codeBreaker", () => {
    const codigo = ["1", "2", "3", "4"];
    const adivinar1 = "1400";
    const adivinar2 = "1244";
    const adivinar3 = "1234";

    expect(codeBreaker(codigo, adivinar1)).toBe("X-");
    expect(codeBreaker(codigo, adivinar2)).toBe("XXX-");
    expect(codeBreaker(codigo, adivinar3)).toBe("XXXX");
});
