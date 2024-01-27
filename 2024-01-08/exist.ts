function exist(board: string[][], word: string): boolean {
    const DIR = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    const R = board.length;
    const C = board[0].length;

    let answer = false;

    const checked = Array.from(Array(R), () => Array(C).fill(false));
    const isValid = (r: number, c: number) => {
        return 0 <= r && r < R && 0 <= c && c < C;
    }
    const solve = (r: number = 0, c: number = 0, currWord: string = '') => {
        if (answer) {
            return;
        }
        if (currWord === word) {
            answer = true;
            return;
        }
        if (currWord.length >= word.length) {
            return;
        }

        for (const [dr, dc] of DIR) {
            const nr = r + dr;
            const nc = c + dc;
            if (!isValid(nr, nc) || checked[nr][nc]) {
                continue;
            }
            if (board[nr][nc] !== word[currWord.length]) {
                continue;
            }
            checked[nr][nc] = true;
            solve(nr, nc, `${currWord}${board[nr][nc]}`);
            checked[nr][nc] = false;
        }
    };

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (!answer && board[r][c] === word[0]) {
                checked[r][c] = true;
                solve(r, c, board[r][c]);
                checked[r][c] = false;
            }
        }
    }

    return answer;
};
