Function.prototype.bind = function(context){
    let self = this
    let args = Array.prototype.slice.call(arguments,1)
    let Fnnop = function(){}
    let fnBound = function(){
        let argss = Array.prototype.slice.call(arguments)
        // 改变this
        return self.apply(this instanceof Fnnop ?this:context,args.concat(argss))
    }
    Fnnop.prototype = this.prototype
    fnBound.prototype = new Fnnop()
    return fnBound
}