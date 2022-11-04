/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Input: head = [1,1,2]
 * Output: [1,2]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if(!head) return head;
    let pointer = head;
    while(!pointer && pointer.next != null) {
        if(pointer.next.val === pointer.val) {
            pointer.next = pointer.next.next;
        }
        else {
            pointer = pointer.next;
        }
    }
    return head;
}