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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) {
        return head;
    }

    let curr = head;
    let prev = null;

    while (curr && left > 1) {
        prev = curr;
        curr = curr.next;
        left--;
        right--;
    }

    const tail = curr;
    const pivot = prev;

    while (right > 0) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        right--;
    }

    if (pivot) {
        pivot.next = prev;
    } else {
        head = prev;
    }

    tail.next = curr;
    return head;
};
