function demo(n){
    let count = 0
    for(let i = 2; i <= n;i++){
        if(isPrime(i)){
            count++
        }
    }
    return count
}
const isPrime = function(num){
    let number = Math.floor(Math.sqrt(num))
    let index = 2
    while(index <= number){
        if(num % index === 0){
            return false
        }
        index++
    }
    return true
}
console.log(demo(10))