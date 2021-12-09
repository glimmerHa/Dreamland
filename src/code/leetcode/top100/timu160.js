function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 双指针法
var getIntersectionNode = function(headA, headB){
    if(headA===null || headB === null) return null
    let pa = headA
    let pb = headB
    while(pa !== pb){
        pa = pa===null? headB:pa.next
        pb = pb===null? headA:pb.next
    }
    return pa
}
// 哈希集合法
var getIntersectionNode = function(headA, headB){
    if(headA===null || headB === null) return null
    let set = new Set()
    let temp = headA
    while(temp!==null){
        set.add(temp)
        temp = temp.next
    }
    temp = headB
    while(temp!==null){
        if(set.has(temp)){
            return temp
        }
        temp = temp.next
    }
    return null
}