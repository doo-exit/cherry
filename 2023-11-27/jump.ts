function jump(nums: number[]): number {
    const count = new Array<number>(nums.length).fill(Infinity);
    count[0] = 0;

    for (let i = 0; i < nums.length; i += 1) {
        const jump = nums[i];
        for (let j = i + 1; j < i + jump + 1 && j < nums.length; j += 1) {
            count[j] = Math.min(count[i] + 1, count[j]);
        }
    }

    return count.pop();
};
