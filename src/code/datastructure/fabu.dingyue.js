// 公众号对象
let eventEmitter = {
    // 缓存列表，存放event及 fn
    list: {},
    // 订阅
    on(event,fn){
        var _this = this
        // 如果对象中没有对应的event值，也就是说明没有订阅过，就给event 创建个缓存列表
        // 如果对象中有响应的event 值，把fn 添加到对应event 的缓存列表中
        _this.list && (_this.list[event] || (_this.list[event] = [])).push(fn)
        return  _this
    },
    // 发布
    emit: function(){
        let _this = this
        console.log('_this',this)
        // 第一个参数是对应的event值，直接用数组的shift方法取出
        let event = Array.prototype.shift.call(arguments),
            fns = [..._this.list[event]];
        // 如果缓存列表里没有fn 就返回false
        if(!fns ||fns.length === 0) {
            return false
        }
        // 遍历event值对应的缓存列表，依次执行fn
        fns.forEach(fn=>{
            fn.apply(_this,arguments)
        })
        return _this
    },
    once(event,fn){
        let _this = this
        function on(){
            _this.off(event,on)
            fn.apply(_this,arguments)
        }
        on.fn = fn
        _this.on(event,on)
        return _this
    },
    off(event,fn){
        let _this = this
        let fns = _this.list[event]
        if(!fns) return false
        if(!fn){
            fns&& (fns.length = 0)
        }else{
            let cb
            for(let i = 0,cbLen = fns.length; i < cbLen; i++){
                cb = fns[i]
                if(cb === fn ||cb.fn === fn){
                    fns.splice(i,1)
                    break;
                }
            }
        }
        return _this
    }
}
function user1(content){
    console.log(this.list)
    console.log('1，订阅了：',content)
}
function user2(content){
    console.log(this.list)
    console.log('2，订阅了：',content)
}
eventEmitter.on('arti',user1)
eventEmitter.on('arti',user2)
// 发布
eventEmitter.emit('arti','javascript')
