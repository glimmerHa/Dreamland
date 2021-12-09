function func(nums){
    let ans = [];
    const length = nums.length
    if(nums === null || nums.length ===0){
        return ans
    }
    nums.sort((a,b)=>a-b);// 排序
    console.log(nums)
    for(let i =0; i< length; i++){
        if(nums[i]>0){
            break;
        }
        if(i>0 && nums[i]===nums[i-1]) continue;
        let L = i+1;
        let R = length-1
        while(L < R){
            const sum = nums[i]+nums[L]+nums[R]
            if(sum ===0){
                ans.push([nums[i], nums[L], nums[R]])
                while(L<R && nums[L] === nums[L+1]) L++
                while(L<R  && nums[R] == nums[R-1]) R--
                L++;
                R--;
            }
            else if(sum <0) L++
            else if(sum >0) R--;
        }
    }
    return ans
}
console.log(func([-1,0,1,2,-1,-4]))