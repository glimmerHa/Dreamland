//关于获取时间戳方式
let start1 = +new Date()
for(let i = 0; i < 650000; i++){
    var temp = +new Date()
}
let end1 = +new Date()
console.log(end1 - start1)
//node环境 135
// chrome浏览器 190
let start2 = Date.now()
for(let i = 0; i < 650000; i++){
    var temp = Date.now()
}
let end2 = Date.now()
console.log(end2 - start2)
// node环境 50
// chrome浏览器 73

let start3 = (new Date()).getTime()
for(let i = 0; i < 650000; i++){
    var temp = (new Date()).getTime()
}
let end3 = (new Date()).getTime()
console.log(end3 - start3)
// node环境 98
// chrome浏览器 115
