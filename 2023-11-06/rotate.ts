/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const r = k % nums.length;
  if (nums.length <= 1 || r === 0) return;

  const nums1 = nums.slice(0, nums.length - r);
  const nums2 = nums.slice(-r);

  let i = 0;
  for (let num of nums2.concat(nums1)) {
    nums[i] = num;
    i += 1;
  }
}
