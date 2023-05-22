export function findMaxConsecutiveOnes(matriz: (number | string)[][]): number {
    if (matriz.find(fila => fila.find(num => num != 1 || 0))) return -1;
    const rowString = matriz.map(fila => fila.join("")).join(" ");
    const colString = matriz[0].map((col, i) => matriz.map(row => row[i]).join("")).join(" ");
    const reg = /1{2,}/g;
    const matchRow: string[] | null = rowString.match(reg);
    const matchCol: string[] | null = colString.match(reg);
    if (!matchRow || !matchCol) return 0;
    const matchArr = matchRow.concat(matchCol);
    const longest = matchArr.reduce((acc, curr) => (curr.length > acc.length ? curr : acc));
    return longest.length;
}
