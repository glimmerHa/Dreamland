// 最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let [i,l] = [0, height.length-1]
    let max = 0
    while(i<= l){
        let ans = Math.min(height[i], height[l])* (l-i)
        max = Math.max(max, ans)
        if(height[i] <= height[l]){
            i++
        }else{
            l--
        }
    }
    return max
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))