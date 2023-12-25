/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 
function maxPathSum(root: TreeNode | null): number {
  let answer = Number.NEGATIVE_INFINITY;

  const dfs = (root: TreeNode | null, max: number) => {
    if (root == null) {
      return 0;
    }

    let left = Math.max(0, dfs(root.left, max));
    let right = Math.max(0, dfs(root.right, max));
    answer = Math.max(answer, left + right + root.val);

    return root.val + Math.max(left, right);
  };

  dfs(root, answer);
  return answer;
}
