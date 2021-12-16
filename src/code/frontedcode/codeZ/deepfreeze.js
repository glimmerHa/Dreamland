function deepFreeze(object){
    let keys = Object.keys(object)
    for(let key of keys){
        let val = object[key]
        if(typeof val === 'object' && val){
            object[key] = deepFreeze(val)
        }else{
            object[key] = val
        }
    }
    return Object.freeze(object)
}
let person = {
    name: "Leonardo",
    profession: {
        name: "developer"
    }
};
deepFreeze(person);
person.profession.name = "doctor"; 