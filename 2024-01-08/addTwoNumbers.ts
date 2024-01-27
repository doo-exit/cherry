/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const next1 = l1 && l1.next ? l1.next : null;
        const next2 = l2 && l2.next ? l2.next : null;

        let val = val1 + val2 + carry;
        let nextCarry = 0;

        if (val > 9) {
            nextCarry = 1;
            val -= 10;
        } else {
            nextCarry = 0;
        }

        return new ListNode(val, addTwoNumbers(next1, next2, nextCarry));
    } else if (carry) {
        return new ListNode(1);
    }

    return null;
};
