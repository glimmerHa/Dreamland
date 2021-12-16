function deepclone(target,map = new WeakMap()){
    if(typeof target === 'object' && target !== null){
        let isArr = Array.isArray(target)
        let cloneObj =isArr?[]: {}
        if(map.get(target)){
            return target
        }
        map.set(target, cloneObj)
        let keys = Object.keys(target)
        for(let key of keys){
            cloneObj[key] = deepclone(target[key],map)
        }
        return cloneObj
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
target.tar = target
console.log(deepclone(target))