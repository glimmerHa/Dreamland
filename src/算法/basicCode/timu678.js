//678. 有效的括号字符串
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
    // 栈解决 括号匹配问题
    let leftStack = []
    let starStack = []
    let len = s.length
    for(let i = 0; i < len;i++){
        const c = s[i]
        if(c === '('){
            leftStack.push(i);
        }else if(c === '*'){
            starStack.push(i)
        }else if(c === ')'){
            if(leftStack.length){
                leftStack.pop()
            }else if(starStack.length){
                starStack.pop()
            }else{
                return false
            }
        }
    }
    while(leftStack.length && starStack.length){
        let left = leftStack.pop()
        let star = starStack.pop()
        if(left > star){
            return false
        }
    }
    return leftStack.length === 0;
};