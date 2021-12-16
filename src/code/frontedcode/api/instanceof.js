//instanceof 主要的作用就是判断一个实例是否属于某种类型
// 原理：右边变量的 prototype 在左边变量的原型链上即可
function myinstanceof(left, right){
    // right 是个构造函数，因此获取其原型对象
    let rightProto = right.prototype
    let left = left.__proto__
    while(true){
        if(left === null) return false
        if(left === rightProto) return true
        left = left.__proto__
    }
}
function instanceof1(left, right){
    let prototype = right.prototype
    left = Object.getPrototypeOf(left)
    while(true){
        if(left === null) return false
        if(left === prototype) return true
        left = Object.getPrototypeOf(left)
    }
}

({name:111}) instanceof Object
myinstanceof(({name:111}) , Object)