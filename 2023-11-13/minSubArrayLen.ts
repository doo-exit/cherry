const MAX_LENGTH = Math.pow(10, 5) + 1;

function minSubArrayLen(target: number, nums: number[]): number {
  let answer = MAX_LENGTH;
  
  let left = 0, right = 0, currentSum = nums[0];

  while (right < nums.length) {
    if (left <= right && target <= currentSum) {
      const count = right - left + 1;
      if (count < answer) {
        answer = count;
      }
      currentSum -= nums[left];
      left += 1;
    } else {
      right += 1;
      currentSum += nums[right];
    }
  }

  return answer === MAX_LENGTH ? 0 : answer;
};
