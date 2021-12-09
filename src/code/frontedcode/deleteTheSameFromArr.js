//利用ES6 Set去重
[...new Set(arr)]
Array.from(new Set(arr))

// 双循环，没有空间复杂度
var delSame = function(arr){
    for(let i = 0; i<arr.length;i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
}
// indexof +空间
// 利用includes + 空间
var indexofF = function(arr){
    let array = []
    for(let i = 0, len = arr.length; i < len;i++){
        if(array.indexOf(arr[i])===-1){
            array.push(arr[i])
        }
    }
    return array;
}
// sort() 先排序
var sortF = function(arr){
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
}
// map keys
let mapF = function(arr){
    let map = new Map()
    for (var i = 1; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i],arr[i])
        }
    }
    return [...map.keys()]
}
// filters 遍历
let filtersF = function (arr) {
    return arr.filter(function(item, index, arr) {
      //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
      return arr.indexOf(item, 0) === index;
    });
}
// reduce
// reduce+includes
let recudeF = function(arr){
    return arr.reduce((acc,cur) => acc.includes(cur)?acc : [...acc,cur],[])
}





var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
var s = recudeF(arr)
console.log(s.length)
console.log(s)

