// todo
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

// 需要迭代深克隆的类型
const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];
function forEach(array, fn){
    let index = -1
    let length = array.length
    while(++index < length){
        fn(array[index],index)
    }
}
function isObject(obj){
    return (typeof obj ==='object' || typeof obj ==='function')&& obj !== null
}
function getType(obj){
    return Object.prototype.toString.call(obj)
}
function getInit(obj){
    let Con = obj.constructor
    return new Con()
}
function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

function cloneReg(obj){
    const reFlags = /\w*$/;
    const result = new obj.constructor(obj.source,reFlags.exec(obj))
    result.lastIndex = obj.lastIndex
    return result;
}
return Object(Symbol.prototype.valueOf.call(obj))
