function func(arr){
    let max = Number.MIN_VALUE
    let min = Number.MAX_VALUE
    for(let item  of arr){
        if(item > max){
            max = item
        }
        if(item < min){
            min = item
        }
    }
    return max-min
}
console.log(func([-12,1,2,3,12,10]))