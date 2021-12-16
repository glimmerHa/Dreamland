PromiseAll1  = function(arr){
    let results = []
    let count = 0
    let len = arr.length
    return new Promise((resolve,reject)=>{
        for(let [i,val] of Object.entries(arr)){
            Promise.resolve(val).then(res=>{
                count++
                results[i] = res
                if(count === len){
                    resolve(results)
                }
            },err=>{
                reject(err)
            })
        }
    })
}