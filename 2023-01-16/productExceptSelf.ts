function productExceptSelf(nums: number[]): number[] {
    const N = nums.length;
    const before = new Array(N).fill(1);
    const after = new Array(N).fill(1);

    for (let i = 1; i < N; i++) {
        before[i] = before[i - 1] * nums[i - 1];
    }

    for (let i = N - 2; i >= 0; i--) {
        after[i] = after[i + 1] * nums[i + 1];
    }

    const answer = [];
    for (let i = 0; i < N; i++) {
        answer.push(before[i] * after[i]);
    }

    return answer;
};
