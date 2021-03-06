/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0, end = n
        while(start <= end){
            let mid = Math.floor((start + end)/2)
            let isBad = isBadVersion(mid)
            if(!isBad){
                start = mid+1
            }
            else if(isBad && !isBadVersion(mid-1)){
                return mid
            }else{
                end = mid-1
            }
        }
    };
};