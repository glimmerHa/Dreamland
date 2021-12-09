function myNew(context, ...args){
    const constructor = context
    // constructor ==> prototype
    const o = Object.create(constructor.prototype)
    const res = constructor.apply(o,args)
    return res
}
var a  = new Funciton() 
myNew(xxx, xxx)
// 解释new 
// 1 创建一个对象
// 2 链接到 原型。 prototype
// 3 绑定this call apply
// 4. 返回新对象