const isPrime1 = function(num){
    let number = num -1
    let count = 0
    while(number > 1){
        count++
        if(num % number === 0){
            console.log(number)
            return false
        }
        number --
    }
    console.log(count)
    return true
}
const isPrime2 = function(num){
    let number = Math.ceil(Math.sqrt(num))
    let index = 2
    let count = 0
    while(index <= number){
        count++
        if(num % index === 0){
            return false
        }
        index++
    }
    console.log(count)
    return true
}
const isPrime = function(num){
    let number = Math.ceil(Math.sqrt(num))
    let index = 2
    let count = 0
    while(index <= number){
        count++
        if(num % index === 0){
            return false
        }
        index++
    }
    console.log(count)
    return true
}
console.log(isPrime(113))
// 方式3 看不懂
// https://blog.csdn.net/huang_miao_xin/article/details/51331710