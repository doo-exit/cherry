function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    const sumNumbers = () => numbers[left] + numbers[right];

    while (true) {
        const sum = sumNumbers();
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            break;
        }
    }

    return [left + 1, right + 1];
};
