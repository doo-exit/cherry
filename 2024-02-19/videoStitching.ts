function videoStitching(clips: number[][], time: number): number {
    clips.sort(([startA, endA], [startB, endB]) => (startA - startB) || (endA - endB));
    
    const dp = new Array(time + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < clips.length; i++) {
        const [start, end] = clips[i];

        if (time <= end) {
            dp[time] = dp[start] + 1;
            break;
        }

        dp[end] = Math.min(dp[start] + 1, dp[end]);
        let count = end - 1;
        while (start < count && dp[end] < dp[count]) {
            dp[count] = dp[end];
            count--;
        }
    }

    return dp[time] === Infinity ? -1 : dp[time];
};
