// 最小栈
function MinStack(){
    this.stack = []
    this.minStack = [Number.MAX_VALUE]
}
MinStack.prototype.push = function(val){
    this.stack.push(val)
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length-1]))
}
MinStack.prototype.pop = function(){
    this.minStack.pop()
    return this.stack.pop()
}
MinStack.prototype.top = function(){
    return this.stack[this.stack.length-1]
}
MinStack.prototype.getMin = function(){
    return this.minStack[this.minStack.length-1]
}
new MinStack()