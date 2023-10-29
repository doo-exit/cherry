const dir = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(dir)
    .toString()
    .split("\n");

type Sudoku = number[][];

const output = (sudoku: Sudoku) => {
    let answer = "";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            answer += sudoku[i][j];
        }
        answer += "\n";
    }
    console.log(answer.trim());
}

const check = (x: number, y: number, sudoku: Sudoku, k: number) => {
    for (let i = 0; i < 9; i++) {
        if (sudoku[y][i] === k)
            return false;
    }

    for (let i = 0; i < 9; i++) {
        if (sudoku[i][x] === k)
            return false;
    }

    x = Math.floor(x / 3) * 3;
    y = Math.floor(y / 3) * 3;
    for (let i = y; i < y + 3; i++) {
        for (let j = x; j < x + 3; j++) {
            if (sudoku[i][j] === k) return false;
        }
    }
    return true;
}

const solve = (sudoku: Sudoku, blank: number) => {
    let end = false;
    if (blank === 0) {
        output(sudoku);
        end = true;
    }
    if (end) return 0;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] === 0) {
                for (let k = 1; k <= 9; k++) {
                    if (check(j, i, sudoku, k)) {
                        sudoku[i][j] = k;
                        solve(sudoku, blank - 1);
                        sudoku[i][j] = 0;
                    }
                    if (k === 9) return;
                }
            }
        }
    }
}

let sudoku = new Array(9).fill(null).map(() => new Array(9).fill(0));
let blank = 0;
for (let i = 0; i < 9; i++) {
    let row = input[i].split("").map(Number);
    for (let j = 0; j < 9; j++) {
        if (row[j] === 0) blank++;
        sudoku[i][j] = row[j];
    }
}
solve(sudoku, blank);
