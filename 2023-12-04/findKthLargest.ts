const MAX = Math.pow(10, 4);
const MIN = -Math.pow(10, 4);

function findKthLargest(nums: number[], k: number): number {
    let left = MIN, right = MAX;
    let middle = 0;

    while (left <= right) {
        middle = Math.round((right + left) / 2);

        let count = 0;
        for (const value of nums) {
            if (middle < value) {
                count += 1;
            }
        }
        
        count < k
        ? right = middle - 1
        : left = middle + 1;
    }

    return left;
};
