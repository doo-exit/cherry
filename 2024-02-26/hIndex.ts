function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b);

    const len = citations.length;
    let answer = len;

    for (let i = 0; i < len; i++) {
        const curr = citations[i];

        if (curr >= answer) {
            break;
        }

        answer--;
    }

    return answer;
};
