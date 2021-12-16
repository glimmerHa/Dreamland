//678. 有效的括号字符串
/* 
给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。

*/
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