/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome1 = function(x) {
    let arr = x.toString().split('')
    let left = 0
    let right = arr.length-1
    while(left<right){
        if(arr[left]!== arr[right]){
            return fasle
        }
        left++
        right--
    }
    return true
};