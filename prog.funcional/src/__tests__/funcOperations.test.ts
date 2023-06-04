import { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } from "../ej-extra-last";

test("", () => {
    expect(seven(times(five()))).toBe(35);
    expect(four(plus(nine()))).toBe(13);
    expect(eight(minus(three()))).toBe(5);
    expect(six(dividedBy(two()))).toBe(3);
    expect(() => one(dividedBy(zero()))).toThrow(/Cant divide by zero/);
});
