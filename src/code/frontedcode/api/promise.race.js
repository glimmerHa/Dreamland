PromiseRace = function(arr){
    return new Promise((resolve,reject)=>{
        for(let [i,val] of Object.entries(arr)){
            Promise.resolve(val).then(res=>{
                return resolve(res)
            },err=>{
                return reject(err)
            })
        }
    })
}