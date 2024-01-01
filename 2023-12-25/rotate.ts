/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const R = matrix.length;
    const C = matrix[0].length;

    // 대각선끼리 바꾸기
    for (let r = 0; r < R; r++) {
        for (let c = 0; c <= r; c++) {
            const temp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = temp;
        }
    }

    // 한 행에서 반대로 뒤집기
    for (let r = 0; r < R; r++) {
        matrix[r].reverse();
    }
};
