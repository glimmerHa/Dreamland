Promise.prototype.all1 = function(arr){
    let result = []
    let count = 0
    let length = arr.length
    return new Promise((resolve,reject)=>{
        for(let [i,val] of Object.entries(arr)){
            Promise.resolve(val).then(res=>{
                count++
                result[i] = res
                if(count === length){
                    resolve(result)
                }
            },err=>{
                return reject(err)
            })
        }
    })
}