var count = 1;
var container = document.getElementById('container');

function getUserAction(event) {
    console.log('this',this)
    console.log('event', event)
    container.innerHTML = count++;
};
let demo = throttle(getUserAction, 3000, {one:false,last:true}) ;
container.onmousemove =demo
function throttle(fn,wait,options){
    let timer = null
    let prev = 0
    let result
    let throttled = function(){
        let _this = this
        let args = arguments
        let now = Date.now()
        if(!timer && options.one === false) prev=now
        let remaining = wait - (now - prev)
        if(remaining <= 0 || remaining > wait){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            result= fn.apply(_this,args)
            prev = now
        }else if(!timer && options.last !== false){
            timer = setTimeout(()=>{
                result= fn.apply(_this,args)
                timer = null
                prev =Date.now()
            },remaining)
        }
        return result
    }
    throttled.cancel = function(){
        clearTimeout(timer)
        timer = null
        prev = 0
    }
    return throttled
}

document.getElementById("button").addEventListener('click', function(){
    demo.cancel();
})