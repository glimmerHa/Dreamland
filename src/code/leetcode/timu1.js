function func(nums,target){
    let ans = []
    if(nums === null || nums.length === 0){
        return []
    }
    let len = nums.length;
    for(let i =0; i < len; i++){
        let a  = nums[i]
        for(let j = i+1; j < len; j ++){
            if(target - a === nums[j]){
                ans = [i,j]
                break;
            }
        }
    }
    return ans
}
console.log(func([3,3],6))