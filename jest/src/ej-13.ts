export function cadenaADN(cadena: string): string {
    if (typeof cadena != "string") throw new Error("Argument must be a string");
    const reg = /[CTAG]/g;
    const match = cadena.match(reg);
    return match ? match.join("") : "";
}
