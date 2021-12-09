// 考虑了数组 版本；其中有 数组 对象，和基本类型
function clone(target){
    if(typeof target ==='object' && target !== null){
        let cloneTarget = Array.isArray(target)?[]:{}
        for(let key in target){
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    }else{
        return target
    }
}

// 增加解决循环引用
function clone2(target,map=new WeakMap()){
    if(typeof target ==='object' && target !== null){
        let cloneTarget = Array.isArray(target)?[]:{}
        if(map.has(target)){
            return target
        }
        map.set(target, cloneTarget)
        for(let key in target){
            cloneTarget[key] = clone1(target[key], map)
        }
        return cloneTarget
    }else{
        return target
    }
}
// 把 for in循环换成 while循环，提升性能
function forEach(arr, fn){
    let index = -1
    const length = arr.length
    while(++index < length){
        fn(arr[index], index)
    }
}
function clone1(target,map=new WeakMap()){
    if(typeof target ==='object' && target !== null){
        const isArray = Array.isArray(target)
        let cloneTarget = isArray?[]:{}
        if(map.has(target)){
            return target
        }
        map.set(target, cloneTarget)
        let keys = isArray? undefined: Object.keys(target)
        forEach(keys||target, (value,key)=>{
            if(keys){
                key = value;
            }
            cloneTarget[key] = clone2(target[key])
        })
        return cloneTarget
    }else{
        return target
    }
}
let target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child',
        sub:{
            name:'fdsafsd',
            arr:[1,2,3,4]
        }
    },
    field4: [2, 4, 8]
};
target.target = target;
console.log(clone1(target))
console.log(clone2(target))