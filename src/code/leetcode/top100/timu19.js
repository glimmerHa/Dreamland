/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let prevhead = new ListNode(-1)
    prevhead.next = head
    let one = head
    let two = prevhead
    let index = 0;
    while(index < n){
        one = one.next
        index++
    }
    while(one!== null){
        one = one.next
        two = two.next
    }
    two.next = two.next.next
    return prevhead.next
};