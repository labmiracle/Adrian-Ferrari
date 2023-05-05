function padLeft(value: string, padding: number | string): string {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    // si padding es una cadena, return padding + value
    if (typeof padding === "number") {
        if (padding < 0) throw new Error("padding must be a positive number");
        return `${Array(padding + 1).join(" ")}${value}`;
    }
    return padding + value;
}

export default padLeft;
