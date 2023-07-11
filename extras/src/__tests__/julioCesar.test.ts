import { julioCesar, decodeJulioCesar, reverseJulioCesar, decodeReverseJulioCesar } from "../julioCesar";

test("", () => {
    expect(julioCesar("ab cdz", 2)).toBe("bfe dc");
    expect(decodeJulioCesar("bfe dc", 2)).toBe("ab cdz");
    expect(reverseJulioCesar("ab cdz", 2)).toBe("bfe dc");
    expect(decodeReverseJulioCesar("bfe dc", 2)).toBe("ab cdz");
});
