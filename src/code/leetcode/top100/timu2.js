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
 var addTwoNumbers = function(l1, l2) {
    let head = null,tail = null
    let shi = 0
    while(l1|| l2){
        let n1 = l1? l1.val :0
        let n2 = l2? l2.val:0
        let sum = shi + n1 + n2
        if(!head){
            head =  tail = new ListNode(sum % 10)
        }else{
            tail.next = new ListNode(sum % 10);
            tail = tail.next
        }
        shi = Math.floor(sum /10)
        if(l1) l1=l1.next
        if(l2) l2 = l2.next
    }
    if(shi>0){
        tail.next = new ListNode(shi)
    }
    return head
};