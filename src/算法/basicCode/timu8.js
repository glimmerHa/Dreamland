//字符串转换整数 题号8
const myAtoi = str => {
    // 去除前面的空格
    str = str.trim()
    // 仅限数字0-9
    const reg = /\d/
    // 是否为负数 ，默认否
    let isNega = false
    if(str[0] === '-' || str[0] === '+'){
        if(!reg.test(str[1])) return 0
    }else{
        if(!reg.test(str[0])) return 0
    }

    const nums = []
    const len = str.length
    for(let i = 0; i < len ; i++){
        if(!nums.length && str[i] === '-'){
            isNega = true;
            continue
        }else if(!nums.length && str[i] === '+'){
            continue
        }
        // 将数字放入nums,遇到非数字，直接跳出循环
        if(reg.test(str[i])){
            nums.push(str[i])
        }else{
            break
        }
    }
    console.log('nums',nums)
    let res = 0;
    const lenNums = nums.length;
    for(let i = lenNums-1; i >= 0; i--){
        res += nums[i]*10 **(lenNums-1-i)
    }
    console.log(res)
    const [MIN,MAX] = [-(2**31), 2**31-1]
    return isNega? (-res < MIN? MIN:-res):res>MAX?MAX:res
}
console.log(myAtoi('42'))
// 解题思路
// 1: 先处理原始数据，trim()去除前面 多余空格
// 2： 先处理特殊情况，什么情况下为0，先输出
// 3： 判断一下正负号。正负号判断是需要判断第一个 有符号的数字
// 4: 常规逻辑操作，判断当前字符是否是数字，如果不是数字 跳出循环。
// 5： 形成数字数组，将数组转换成整数。
// 6: 判断是否超出边界，输出最终结果