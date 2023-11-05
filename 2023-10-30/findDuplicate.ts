function findDuplicate(nums: number[]): number {
    let left = 0, right = nums.length - 1;
    while (left !== right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        for (let i = 0; i < nums.length; i += 1) {
            if (nums[i] <= mid) count += 1;
        }
        if (count <= mid) {
            left = mid + 1;
        } else if (count > mid) {
            right = mid;
        }
    }
    return right;
};
