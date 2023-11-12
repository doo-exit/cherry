// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//   }
// }

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const answer = [];

  const dfs = (node: TreeNode | null) => {
    if (node === null) return;

    answer.push(node.val);

    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(root);

  const solve = (node: TreeNode | null, i = 0) => {
    if (i >= answer.length - 1) {
      if (node) {
        node.val = answer[i];
      }
      return;
    }

    node.val = answer[i];
    node.left = null;
    node.right = new TreeNode();

    solve(node.right, i + 1);
  }
  
  solve(root);
};
