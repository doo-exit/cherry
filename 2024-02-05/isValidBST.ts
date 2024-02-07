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

function isValidBST(
    node: TreeNode | null,
    left: number = Number.MIN_SAFE_INTEGER,
    right: number = Number.MAX_SAFE_INTEGER,
): boolean {
    if (node === null) {
        return true;
    }
    
    const curr = node.val;
    if (curr <= left || right <= curr) {
        return false;
    }

    return isValidBST(node.left, left, curr)
        && isValidBST(node.right, curr, right);
};
