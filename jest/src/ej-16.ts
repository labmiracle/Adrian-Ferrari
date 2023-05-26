type Matrix = (number | string)[][];

function findConsecutiveOne(matrix: Matrix, m: number, n: number): number {
    const newMatrix = matrix.map(a => [...a]);
    newMatrix[m][n] = 0;
    const right: number = 1 + (newMatrix?.[m]?.[n + 1] == 1 ? findConsecutiveOne(newMatrix, m, n + 1) : 0);
    const left: number = 1 + (newMatrix?.[m]?.[n - 1] == 1 ? findConsecutiveOne(newMatrix, m, n - 1) : 0);
    const up: number = 1 + (newMatrix?.[m + 1]?.[n] == 1 ? findConsecutiveOne(newMatrix, m + 1, n) : 0);
    const down: number = 1 + (newMatrix?.[m - 1]?.[n] == 1 ? findConsecutiveOne(newMatrix, m - 1, n) : 0);
    return Math.max(right, left, up, down);
}

export function findMaxConsecutiveOnes(matrix: Matrix): number {
    if (matrix.some(fila => fila.some(num => num != 1 && num != 0))) return -1;
    const newMatrix = matrix.map(a => [...a]);
    const arrCount = [0];
    for (let m = 0; m < newMatrix.length; m++) {
        for (let n = 0; n < newMatrix[m].length; n++) {
            if (newMatrix[m][n] == 1) {
                const maxCount = findConsecutiveOne(newMatrix, m, n);
                arrCount.push(maxCount);
            }
        }
    }

    return Math.max(...arrCount);
}
