/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if(head === null) return true
    let endOfFirstHalf = function(head){
        let slow = head
        let fast = head
        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    let reverseList = function(head){
        let prev = null
        let cur = head
        while(cur){
            let temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
        return prev
    }
    const firstHead = endOfFirstHalf(head)
    const secondeHead = reverseList(firstHead.next)

    let one = head
    let two = secondeHead
    let result = true
    while(result && two){
        if(one.val !== two.val){
            result = false
        }
        one = one.next
        two = two.next
    }
    firstHead.next = reverseList(secondeHead)
    return result
};