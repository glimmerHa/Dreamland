/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let length = lists.length

    if(length===0) return null;
    let merge = function(l1, l2){
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
    }
    // 我的方案
    return lists.reduce((acc, cur) =>{
        return merge(acc,cur)
    },null)
    // 学的方案
    const newLists = [];
    //自底而上归并，第一次归并大小为2的链表，第二次归并大小4的链表...
    for (let i = 0; i < lists.length; i += 2) {
        newLists.push(merge(lists[i], lists[i + 1] || null));
    }
    return mergeKLists(newLists);
};