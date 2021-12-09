//多维数组彻底的降维
const flattenDeep = (arr) => Array.isArray(arr)
  ? arr.reduce( (a, b) => [...a, ...flattenDeep(b)] , [])
  : [arr]

console.log(flattenDeep([1, [[2], [3, [4]], 5]]))
const flattenDeepArr = (arr)=>{
    if(Array.isArray(arr)){
        return arr.reduce( (acc, cur) => {
            let arr = acc.concat(flattenDeepArr(cur))
            return arr
        },[])
    }else {
        return [arr]
    }
}
console.log(flattenDeepArr([1, [[2], [3, [4]], 5]]))