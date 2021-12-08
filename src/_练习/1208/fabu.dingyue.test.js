let eventEmitter = {
    list:{},
    on(event, fn){
        let _this = this
        _this.list && (_this.list[event] || (_this.list[event]=[])).push(fn)
        return _this
    },
    emit(){
        let _this = this
        let event = Array.prototype.shift.call(arguments)
        let fns = _this.list && _this.list[event]
        if(!fns || fns.length ===0){
            return false
        }
        fns.forEach(fn=>{
            fn.apply(_this, arguments)
        })
        return _this
    }
}