let flattenDeepArr = function(arr){
    if(Array.isArray(arr)){
        return arr.reduce((acc,cur,index,src)=>{
            return acc.concat(flattenDeepArr(cur))
        },[])
    }else{
        return [arr]
    }
}
console.log(flattenDeepArr([1, [[2], [3, [4]], 5]]))