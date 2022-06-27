// 最大公约数 要好好思考一下
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let length = nums.length
    k = k%length
    let count = gcd(k,length)
    for(let i = 0; i < count; i++){
        let cur = i
        let curVal = nums[i]
        do{
            const next = (cur+k)%length
            const nextVal = nums[next]
            nums[next] = curVal
            curVal = nextVal
            cur = next
        }while(i !== cur)
    }
    return nums
};
var gcd = function(x,y){
    return y? gcd(y, x%y):x
}