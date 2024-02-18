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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const parent = new Map<PropertyKey, number>();

    const traversal = (node: TreeNode | null) => {
        if (!node) return;

        if (node.left) {
            parent.set(node.left.val, node.val);
        }

        if (node.right) {
            parent.set(node.right.val, node.val);
        }

        traversal(node.left);
        traversal(node.right);
    }

    traversal(root);

    const checked = new Set<PropertyKey>();
    let pVal = p.val, qVal = q.val;
    checked.add(pVal);
    checked.add(qVal);

    while (true) {
        const pParent = parent.get(pVal);
        const qParent = parent.get(qVal);

        if (typeof pParent !== 'undefined') {
            if (checked.has(pParent)) {
                return new TreeNode(pParent);
            }
            checked.add(pParent);
        }

        if (typeof qParent !== 'undefined') {
            if (checked.has(qParent)) {
                return new TreeNode(qParent);
            }
            checked.add(qParent);
        }

        pVal = pParent;
        qVal = qParent;
    }
};
