function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;

  let jump = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (jump === i && !nums[i]) return false;
    jump = Math.max(jump, nums[i] + i);
    if (jump >= nums.length - 1) return true;
  }

  return false;
}
