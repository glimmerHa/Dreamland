race = function(arr){
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
all = function (arr){
    let result = []
    let count = 0
    let length = arr.length
    return new Promise((resolve,reject)=>{
        for(let [i,val] of Object.entries(err)){
            Promise.resolve(val).then(res=>{
                count++
                result[i] = res
                if(count === length){
                    return resolve(result)
                }
            },err=>{
                return reject(err)
            })
        }
    })
}