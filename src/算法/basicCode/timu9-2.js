// ~~ 运算符
// 特殊情况
var isPalindrome = function(x){
    // 特殊情况：负数 和 能整除10 都不会是回文数字
    if(x<0 || (!(x%10) && x)) return false
    let x2 = x, res = 0;
    while(x2){
        res = res*10+ x2%10
        x2 = ~~(x2 / 10)
    }
    return res === x
}