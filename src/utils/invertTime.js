/**
 * 时间戳转换成 时间显示
 * 1649236998956
 * @return '2022-4-6 17:23:18'
 */
 function invertTime(val){
    var timestamp4 = new Date(val);
    let time =timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)
    return time
}