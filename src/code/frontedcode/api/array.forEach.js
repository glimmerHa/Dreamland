var arr = [
{a:1,b:2},{a:3,b:4}
]
// arr.forEach(item=>{
//     item.a = 5
// })
// console.log(arr)
let arr1 = arr.map(item=>{
    return {
        ...item,
        a : 6
    }
})
console.log(arr)
console.log(arr1)