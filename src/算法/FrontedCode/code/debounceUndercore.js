var count = 1;
var container = document.getElementById('container');

function getUserAction(event) {
    console.log('this',this)
    console.log('event', event)
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;
// container.onmousemove =debounce1(getUserAction, 1000) ;
// container.onmousemove =debounce2(getUserAction, 1000) ;
// container.onmousemove =debounce3(getUserAction, 1000) ;
// container.onmousemove =debounce4(getUserAction, 1000, true) ;
// container.onmousemove =debounce5(getUserAction, 1000, true) ;
var setUseAction = debounce(getUserAction, 10000, true);
container.onmousemove = setUseAction;

document.getElementById("button").addEventListener('click', function(){
    setUseAction.cancel();
})

// 第一版本
function debounce1(func, wait){
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(func, wait)
        // 有this指向 问题。
    }
}

// 考虑this
function debounce2(func, wait){
    let timer = null
    return function(){
        let _this = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(_this)
        }, wait)
        // 事件 回调函数带参数，event. 打印的会变成undefined
    }
}

// 考虑参数 带回，比如event对象
function debounce3(func, wait){
    let timer = null
    return function(){
        let args = arguments
        let _this = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(_this,args)
            // apply 参数1  是this(执行上下文) 参数2 是 函数参数数组。必须是数组
        }, wait)
    }
}

// 第四版
// 添加 需求， 立刻执行
function debounce4(func, wait, immediate){
    let timer = null
    return function(){
        let args = arguments
        let _this = this
        clearTimeout(timer)
        // 清除定时器，但是定时器数字还存在。
        if(immediate){
            // 如果已经执行过，不再执行
            var callnow = !timer
            timer = setTimeout(function(){
                timer = null
            },wait)
            if(callnow) func.apply(_this,args)
        }else{
            timer = setTimeout(function(){
                func.apply(_this,args)
            },wait)
        }
    }
}

// 第五版 添加返回值
function debounce5(func, wait, immediate){
    let timer = null;
    let result;
    return function(){
        let args = arguments
        let _this = this
        clearTimeout(timer)
        // 清除定时器，但是定时器数字还存在。
        if(immediate){
            // 如果已经执行过，不再执行
            var callnow = !timer
            timer = setTimeout(function(){
                timer = null
            },wait)
            // 返回函数的执行结果
            if(callnow) result = func.apply(_this,args)
            //在 immediate 为 true 的时候返回函数的执行结果
        }else{
            timer = setTimeout(function(){
                func.apply(_this,args)
                //当 immediate 为 false 的时候，因为使用了 setTimeout ，我们将 func.apply(context, args) 的返回值赋给变量，最后再 return 的时候，值将会一直是 undefined
            },wait)
        }
        return result
    }
}

// 需求： 该防抖 可以取消
// 第六版
function debounce(func, wait, immediate){
    let timer = null;
    let result;
    var debounced = function(){
        let args = arguments
        let _this = this
        clearTimeout(timer)
        // 清除定时器，但是定时器数字还存在。
        if(immediate){
            // 如果已经执行过，不再执行
            var callnow = !timer
            timer = setTimeout(function(){
                timer = null
            },wait)
            // 返回函数的执行结果
            if(callnow) result = func.apply(_this,args)
            //在 immediate 为 true 的时候返回函数的执行结果
        }else{
            timer = setTimeout(function(){
                func.apply(_this,args)
                //当 immediate 为 false 的时候，因为使用了 setTimeout ，我们将 func.apply(context, args) 的返回值赋给变量，最后再 return 的时候，值将会一直是 undefined
            },wait)
        }
        return result
    }
    debounced.cancel = function(){
        clearTimeout(timer)
        timer = null
    }
    return debounced
}
