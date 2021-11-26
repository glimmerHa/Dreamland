// 常规思考
function numFormat(num){
    num = num.toString().split('.')
    let arr = num[0].split('').reverse()
    let res = []
    for(let i = 0, len = arr.length; i < len; i++){
        if(i%3 === 0 && i !== 0){
            res.push(',')
        }
        res.push(arr[i])
    }
    res.reverse()
    if(num[1]){
        return res.join('').concat('.'+num[1])
    }else{
        return res.join('')
    }
}
// console.log(numFormat(19351235.235767))

// API
// var a=1234567894532;
// var b=673439.4542;
// console.log(a.toLocaleString());
// console.log(b.toLocaleString());

// 正则表达
function numFormat(num){
    var res = num.toString().replace(/\d+/,function(n){
        return n.replace(/(\d)(?=(\d{3})+$)/g, function($1){
            return $1+','
        })
    })
    return res
}
console.log(numFormat(19351235.235767))