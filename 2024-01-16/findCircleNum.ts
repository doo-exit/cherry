function findCircleNum(isConnected: number[][]): number {
    const N = isConnected.length;
    let answer = N;
    const parent = Array.from(new Array(N), (_, i) => i);

    function find(a: number) {
        if (parent[a] === a) {
            return a;
        }

        return find(parent[a]);
    }

    function union(a: number, b: number) {
        const aRoot = find(a);
        const bRoot = find(b);
        if (aRoot === bRoot) return;
        parent[bRoot] = aRoot;
        answer -= 1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (!isConnected[i][j]) continue;
            union(i, j);
        }
    }

    return answer;
};
