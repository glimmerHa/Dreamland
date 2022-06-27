/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    pre = spre = head
   while(spre  && spre.next){
       pre = pre.next
       spre = spre.next.next
   }
   return pre
};