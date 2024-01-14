function candy(ratings: number[]): number {
    const total = ratings.length;

    if (!total) return 0;
    if (total === 1) return 1;

    const results = new Array(total).fill(1);

    for (let i = 1; i < total; i++) {
        const left = ratings[i - 1];
        const right = ratings[i];

        if (left < right) {
            results[i] = results[i - 1] + 1;
        }
    }

    for (let i = total - 2; i >= 0; i--) {
        const left = ratings[i];
        const right = ratings[i + 1];

        if (right < left) {
            results[i] = Math.max(results[i], results[i + 1] + 1);
        }
    }

    const answer = results.reduce((curr, acc) => curr += acc, 0);
    return answer;
};
