String.prototype.mytrim = function(){
    return this.replace(/^\s\s*/,'').replace(/\s\s*$/,'')
}
String.prototype.mytrim2 = function(){
    return this.replace(/^\s+|\s+$/,'')
}
console.log(' fdsf sa '.mytrim2())