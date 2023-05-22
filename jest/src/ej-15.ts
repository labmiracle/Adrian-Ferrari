export function repeatCharIndexFinder(string: string): number {
    const reg = /(\w)\1/gi;
    return string.search(reg);
}
