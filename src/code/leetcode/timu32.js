//32. 最长有效括号 困难
/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let max = 0
    let length = s.length
    let stack = [-1]
    for(let i = 0; i < length ; i++){
        if(s[i] === '('){
            stack.push(i)
        } else {
            stack.pop()
            if(stack.length){
                max = Math.max(max, i-stack[stack.length-1])
            }else{
                stack.push(i)
            }
        }
    }
    return max
};