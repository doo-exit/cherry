function merge(left: number[], right:number[]) {
    const sortedArr = [];

    while (left.length && right.length) {
        left[0] <= right[0]
        ? sortedArr.push(left.shift())
        : sortedArr.push(right.shift());
    }

    return [...sortedArr, ...left, ...right];
}

function sortArray(nums: number[]): number[] {
    if (nums.length === 1) {
        return nums;
    }

    const index = Math.ceil(nums.length / 2);
    const left = nums.slice(0, index);
    const right = nums.slice(index);
    
    return merge(sortArray(left), sortArray(right));
};
