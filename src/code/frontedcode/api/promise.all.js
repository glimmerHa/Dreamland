PromiseAll1 = function(arr){
    let results = []
    return new Promise((resolve)=>{
        arr.forEach((item)=>{
            item.then((res)=>{
                results.push(res);
            })
        })
        resolve(results)
    })
}
PromiseAll2 = function(arr){
    let results = []
    let count = 0
    let len = arr.length
    return new Promise((resolve,reject)=>{
        for(let [i,val] of Object.entries(arr)){
            Promise.resolve(val).then(res=>{
                count++
                results[i] = res;
                if(count === len){
                    resolve(results)
                }
            },(err)=>{
                return reject(err)
            })
        }
        
    })
}
let promise1 = new Promise(function (resolve) {
    resolve(1);
});
let promise2 = new Promise(function (resolve) {
    resolve(2);
});
let promise3 = new Promise(function (resolve) {
    resolve(3);
});
let promiseAll = PromiseAll2([promise1, promise2, promise3]);
promiseAll.then(function (res) {
    console.log(res);
});