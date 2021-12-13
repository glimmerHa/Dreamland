// typeof 判断基本类型和 object function
// 不能清晰告知是具体对象
//js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息👉
/**
 * 000：对象
010：浮点数
100：字符串
110：布尔
1：整数 */

// 对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的。
// null：所有机器码均为0
// undefined：用 −2^30 整数来表示