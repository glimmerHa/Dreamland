// 单调栈： 496 503  739
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0)
    // 放元素索引
    let stack = []
    // 倒着放
    for(let i = temperatures.length-1; i >=0 ; i--){
        // 判定个子高矮
        while(stack.length
            && temperatures[stack[stack.length-1]] <= temperatures[i]){
            stack.pop()
        }
        res[i] = stack.length? stack[stack.length-1] -i :0
        stack.push(i)
    }
    return res
};
console.log(dailyTemperatures([30,40]))
