// 链表的题目
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1 ===null && l2===null) return null
    let prevHead  = new ListNode(-1)
    let prev = prevHead
    while(l1 !== null  && l2 !== null){
        if(l1.val <= l2.val){
            prev.next = l1
            l1 = l1.next
        }else{
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
    return prevHead.next;
};