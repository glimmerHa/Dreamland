function throwtoreturn(text){
    let result = ''
    if(typeof text === 'string'){
        // 逗号语句是返回最后一个表达式结果
        return result = text,result+' succ'
    }
    if(typeof text ==='number'){
        throw new Error()
    }
    // 当执行 throw 语句后，不会继续执行后面的语句
    console.log(result)
    return result
}
// throwtoreturn(12)
/**
 * VM42:7 Uncaught Error
    at throwtoreturn (<anonymous>:7:15)
    at <anonymous>:1:1
 */