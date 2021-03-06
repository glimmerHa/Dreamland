//剑指 Offer 25. 合并两个排序的链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let prevhead = new ListNode(-1)
    let prev = prevhead
    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1
            l1 =  l1.next
        }else{
            prev.next = l2
            l2 =  l2.next
        }
        prev = prev.next
    }
    prev.next = l1?l1:l2
    return prevhead.next
};