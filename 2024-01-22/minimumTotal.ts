function minimumTotal(triangle: number[][]): number {
    const H = triangle.length;
    const W = triangle[0].length;
    const summit = triangle[0][0];

    if (H === 1 && W === 1) {
        return summit;
    }

    const dp = Array.from(new Array(H), () => new Array(W).fill(Number.MAX_SAFE_INTEGER));
    const isValid = (h: number, w: number) => (0 <= h && h < H && 0 <= w && w < h + 1);

    dp[0][0] = summit;

    for (let h = 1; h < H; h++) {
        for (let w = 0; w < h + 1; w++) {
            const [lh, lw] = [h - 1, w - 1];
            const [rh, rw] = [h - 1, w];
            
            let min = Number.MAX_SAFE_INTEGER;
            if (isValid(lh, lw)) {
                min = dp[lh][lw];
            }
            if (isValid(rh, rw)) {
                min = Math.min(min, dp[rh][rw])
            }

            dp[h][w] = min + triangle[h][w];
        }
    }

    return Math.min(...dp[H - 1]);
};
