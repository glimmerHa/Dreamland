// 翻转链表

function ListNode(val){
    this.val = val
    this.next = null
}

let reverseList = (head)=>{
    let prev = null
    if(!head) return prev
    while(head){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}