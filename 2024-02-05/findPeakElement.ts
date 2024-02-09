function findPeakElement(nums: number[]): number {
    const N = nums.length;

    if (N === 1) {
        return 0;
    } else if (nums[0] > nums[1]) {
        return 0;
    } else if (nums[N - 2] < nums[N - 1]) {
        return N - 1;
    }

    let left = 0, right = N - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
