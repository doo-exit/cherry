function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    const SIZE = 8;
    const DIR = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], /* King */, [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    const map = Array.from(Array(SIZE), () => Array(SIZE).fill(false));
    queens.forEach(([a, b]) => {
        map[a][b] = true;
    });

    const isValid = (r: number, c: number) => {
        return 0 <= r && r < SIZE && 0 <= c && c < SIZE;
    }

    const checked = new Array<boolean>(9).fill(false);
    checked[4] = true;
    const isAllChecked = () => {
        return !checked.filter(value => value).length;
    }

    const answer = new Array<[number, number]>();
    let count = 1;
    
    while (count < SIZE && !isAllChecked()) {
        for (let d = 0; d < DIR.length; d++) {
            if (checked[d]) continue;

            const dir = DIR[d];
            const x = king[0] + (dir[0] * count);
            const y = king[1] + (dir[1] * count);

            if (isValid(x, y) && map[x][y]) {
                checked[d] = true;
                answer.push([x, y]);
            }
        }
        count++;
    }

    return answer;
};
