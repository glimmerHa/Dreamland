function Parent(name,age){
    this.name = name
    this.age = age
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(name,age,sex){
    Parent.call(this,name,age)
    this.sex = sex
}
Child.prototype.getSex=function(){
    console.log(this.sex)
}
function createObj(parent){
    var F = function(){}
    F.prototype = parent.prototype
    return new F()
}
function prototype(child,parent){
    child.prototype = createObj(parent)
    child.prototype.constructor = child
}

prototype(Child,Parent)
Child.prototype.getSex = function(){
    console.log(this.sex)
}
var child1 = new Child('huagtao',18,'女')
console.log(child1);
