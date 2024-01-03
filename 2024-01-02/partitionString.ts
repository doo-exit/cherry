function partitionString(s: string): number {
    let answer = 0;
    for (let i = 0; i < s.length;) {
        const check = new Set();
        answer++;
        while (!check.has(s[i])) {
            check.add(s[i]);
            i++;
        }
    }
    return answer;
};
