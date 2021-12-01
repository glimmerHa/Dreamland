function Promise(fn){
    let state = 'pending'
    let value = null
    let callbacks = []
    this.then  = function(onfulFn,onRejeFn){
        return new Promise((resolve,reject)=>{
            handle({
                onfulFn,
                resolve
            })
        })
    }
    function handle(callback){
        if(state === 'pending'){
            callbacks.push(callback)
            return 
        }
        if(state === 'fulfilled'){
            if(!callback.onfulFn){
                callback.resolve(value)
                retrun
            }
            const ret = callback.onfulFn(value)
            callback.resolve(ret)
        }
    }

    function resolve(newValue){
        const fn = ()=>{
            if(state != 'pending') return
            state = 'fulfilled'
            value = newValue
            handelCb()
        }
        setTimeout(fn,0)
    }

    function handelCb(){
        while(callbacks.length){
            const fulfiledFn = callbacks.shift()
            handle(fulfiledFn)
        }
    }
    fn(resolve)
}