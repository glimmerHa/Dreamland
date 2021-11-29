/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n ==0) return 0
    if(n == 1) return 1
    let res = [0,1]
    let p = 0, q = 1,r;
    for(let i = 2; i<= n; i++){
       r = q + p
        p = q
        q=r
    }
    return r
};
// 时间复杂度 n  空间复杂度 1