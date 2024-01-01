function updateBoard(board: string[][], click: number[]): string[][] {
    const adjacent = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /*[0, 0],*/ [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    const BOARD_VALUE = {
        UNREVEALED: 'M', // Unrevealed Mine
        EMPTY: 'E', // Unrevealed Empty Squre
        BLANK: 'B', // Revealed Blank Square
        REVEALED: 'X' // Revealed Mine
    };

    const isValid = (r: number, c: number) => {
        return 0 <= r && r < board.length && 0 <= c && c < board[0].length;
    };

    const getAdjacentMineCount = (r: number, c: number) => {
        let count = 0;
        for (const [dr, dc] of adjacent) {
            const nr = r + dr;
            const nc = c + dc;
            
            if (!isValid(nr, nc)) continue;

            if (board[nr][nc] === BOARD_VALUE.UNREVEALED) {
                count += 1;
            }
        }
        return count;
    };

    const play = (r: number, c: number) => {
        if (board[r][c] === BOARD_VALUE.UNREVEALED) {
            board[r][c] = BOARD_VALUE.REVEALED;
            return;
        }

        const q = [];
        board[r][c] = BOARD_VALUE.BLANK;
        q.push([r, c]);

        while (q.length) {
            const [cr, cc] = q.shift();
            const count = getAdjacentMineCount(cr, cc);

            if (count > 0) {
                board[cr][cc] = `${count}`;
            } else {
                for (const [dr, dc] of adjacent) {
                    const nr = cr + dr;
                    const nc = cc + dc;
                    
                    if (!isValid(nr, nc)) continue;
                    if (board[nr][nc] !== BOARD_VALUE.EMPTY) continue;

                    board[nr][nc] = BOARD_VALUE.BLANK;
                    q.push([nr, nc]);
                }
            }
        }
    }

    play(click[0], click[1]);
    return board;
};
