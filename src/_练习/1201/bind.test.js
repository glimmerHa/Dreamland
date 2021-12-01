Function.prototype.bind = function(context){
    let self = this
    let args = Array.prototype.slice.call(arguments,1)
    let Fn = function(){}
    let fnBound =  function(){
        let argss = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof Fn? this:context, args.concat(argss))
    }
    fnBound.prototype = this.prototype
    fnBound.prototype = new Fn()

    return fnBound
}
