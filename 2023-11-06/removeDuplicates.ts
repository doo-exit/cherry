// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// The comments are another solution with not using any built-in functions.

const INT_MAX = 3 * Math.pow(10, 4) + 1;

// function moveBack(nums: number[], index: number) {
//   for (let i = index; i < nums.length - 1; i += 1) {
//     const temp = nums[i];
//     nums[i] = nums[i + 1];
//     nums[i + 1] = temp;
//   }
// }

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length;
  }

  let pivotIndex = 0;
  let currentIndex = 1;
  let isOver = false;

  while (currentIndex < nums.length) {
    // if (nums[pivotIndex] === INT_MAX) break;

    if (nums[pivotIndex] === nums[currentIndex] && !isOver) {
      isOver = true;
      currentIndex += 1;
      continue;
    }

    while (
      nums[pivotIndex] === nums[currentIndex] &&
      currentIndex < nums.length
    ) {
      // nums[currentIndex] = INT_MAX;
      // moveBack(nums, currentIndex);

      nums[currentIndex] = INT_MAX;
      currentIndex += 1;
    }

    isOver = false;
    pivotIndex = currentIndex;
    currentIndex = pivotIndex + 1;
  }

  nums.sort((a, b) => a - b);

  let answer = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === INT_MAX) break;
    answer += 1;
  }

  return answer;
}
