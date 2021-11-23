// 运行失败
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let count = 0
    const [MIN,MAX] = [-(2**31), 2**31-1]
    
    if(dividend >0 && divisor >0){
        while(dividend >= divisor){
            dividend = dividend-divisor
            count++
        }
    }
    if(dividend >0 && divisor < 0){
        let tag = true
        divisor = -divisor
        while(dividend >= divisor){
            dividend = dividend-divisor
            count++
        }
        count = -count
    }
    if(dividend <0 && divisor > 0){
        let tag = true
        dividend = -dividend
        while(dividend >= divisor){
            dividend = dividend-divisor
            count++
        }
        count = -count
    }
    if(dividend <0 && divisor <0){
        dividend = -dividend
        divisor = -divisor
        while(dividend >= divisor){
            dividend = dividend-divisor
            count++
        }
    }
    

    if(count > MAX){
        count= MAX
    }
    if(count < MIN){
        count= MIN
    }
    return count
};