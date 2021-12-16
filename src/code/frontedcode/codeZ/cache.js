function memoize(fn){
    const cache = {}
    return function(param){
        if(cache[param]){
            console.log('缓存')
            return cache[param]
        }else{
            console.log('计算')
            let result = fn(param)
            cache[param] = result
            return result
        }
    }
}
const toUpper = (str ="")=> str.toUpperCase();

const toUpperMemoized = memoize(toUpper);

console.log(toUpperMemoized("abcdef"))
console.log(toUpperMemoized("abcdef"))