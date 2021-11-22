function func(nums,target){
    if(nums === null || nums.length === 0){
        return []
    }
    let len = nums.length
    let map = new Map()
    for(let i = 0; i < len; i++){
        x = target - nums[i]
        if(map.has(x)){
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
}
console.log(func([2,7,11,15],9))