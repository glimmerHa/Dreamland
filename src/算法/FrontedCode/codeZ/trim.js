// 实现一个trim
String.prototype.trim1 = function(){
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/,'')
}
String.prototype.trim2 = function(){
    return this.replace(/^\s+|\s+$/g,'')
}
console.log('  '.trim1().length)