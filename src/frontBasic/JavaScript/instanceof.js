function myinstanceof(left, right){
    // 基本类型不可
    if(typeof left !== 'object' || left === null) return false
    // left 是对象， right 是prototype
    left  = left.__proto__
    //  Object.getPrototypeOf
    while(true){
        if(left === null){
            return false
        }
        if(left === right.prototype) return true
        left = left.__proto__
    }
}
myinstanceof(obj, Object)