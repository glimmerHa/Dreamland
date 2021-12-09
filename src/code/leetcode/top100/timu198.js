var rob = function(nums) {
    let length = nums.length
    let dp = []
    dp = [nums[0],  Math.max(nums[0], nums[1])]
    for(let i =2; i < length; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
};