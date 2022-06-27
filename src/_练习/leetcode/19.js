//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。 

// 值得深度思考的题目

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
    let h = new ListNode(0,head)
    let first = head
    let second = h
    while(n>0){
        first = first.next
        n--
    }
    while(first){
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return h.next
};