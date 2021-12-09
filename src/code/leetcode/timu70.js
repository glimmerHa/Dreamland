//70  爬楼梯
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n ==0) return 1
    if(n == 1) return 1
    let p =1,q = 1,r;
    for(let i =2; i <= n; i++){
        r = p+q
        p =q
        q = r
    }
    return r
};