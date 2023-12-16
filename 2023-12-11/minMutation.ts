function getDiff(gene: string, bank: string[]) {
    const difference = [];
    for (const bankGene of bank) {
        let count = 0;
        for (let i = 0; i < gene.length; i += 1) {
            if (gene[i] !== bankGene[i]) {
                count += 1;
            }
        }
        difference.push(count);
    }
    return difference;
}

function minMutation(startGene: string, endGene: string, bank: string[]): number {
    let answer = Number.MAX_SAFE_INTEGER;
    const checked = new Array(bank.length).fill(false);

    const solve = (currGene: string = startGene, count: number = 0) => {
        if (count > bank.length || count >= answer) {
            return;
        }

        if (currGene === endGene) {
            answer = Math.min(answer, count);
            return;
        }

        const diff = getDiff(currGene, bank);
        for (let i = 0; i < diff.length; i++) {
            if (diff[i] !== 1) continue;
            if (checked[i]) continue;

            checked[i] = true;
            solve(bank[i], count + 1);
            checked[i] = false;
        }
    };

    solve();

    return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
