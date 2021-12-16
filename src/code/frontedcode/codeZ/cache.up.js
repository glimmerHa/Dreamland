// 接收多个参数
let slice = Array.prototype.slice
function memoize(fn){
    const cache = {}
    return (...args)=>{
        const params = slice.call(args);
        console.log(cache)
        if(cache[params]){
            console.log('缓存')
            return cache[params]
        }else{
            console.log('计算')
            let result = fn(...params)
            cache[params] = result
            return result
        }
    }
}
const makeFullName = (fName, lName) => `${fName} ${lName}`;
const reduceAdd = (numbers, startingValue = 0) => numbers.reduce((total, cur) => total + cur, startingValue);
const toUpper = (str ="")=> str.toUpperCase();

const toUpperMemoized = memoize(toUpper);


const makeFullNameMemoized = memoize(makeFullName);
const reduceAddMemoized = memoize(reduceAdd);

// console.log(makeFullNameMemoized("huang",'tao'))
// console.log(makeFullNameMemoized("huang",'tao'))
// console.log(makeFullNameMemoized('ss','xx'))
// console.log(makeFullNameMemoized('ss','xx'))
console.log(reduceAddMemoized([1, 2, 3, 4, 5], 5))
console.log(reduceAddMemoized([1, 2, 3, 4, 5], 5))
// console.log(toUpperMemoized("abcdef"))
// console.log(toUpperMemoized("abcdef"))