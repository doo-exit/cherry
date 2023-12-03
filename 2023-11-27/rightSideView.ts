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

function rightSideView(root: TreeNode | null): number[] {
    const map = new Map<number, Array<number>>();
    const answer = [];

    const triversal = (node: TreeNode, deps: number) => {
        if (!node) return;

        const value = node.val;
        if (value === null) return;

        map.has(deps)
            ? map.get(deps).push(value)
            : map.set(deps, [value]);

        if (node.left) triversal(node.left, deps + 1);
        if (node.right) triversal(node.right, deps + 1);
    }
    triversal(root, 0);

    let deps = 0;
    while (map.has(deps)) {
        answer.push(map.get(deps).pop());
        deps += 1;
    }

    return answer;
};
