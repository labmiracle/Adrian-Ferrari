export function comparaArrays<Type>(a: Type[], b: Type[]): boolean {
    return (
        a.length === b.length &&
        a.every((element, index) => element === b[index])
    );
}
