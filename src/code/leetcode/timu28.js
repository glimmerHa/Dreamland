/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length ==0) return 0
    var a = haystack.indexOf(needle)
    return a
};

// 这是暴力解法，利用API 
// 考察算法，  使用KMP算法
// Knuth-Morris-Pratt 算法的核心为前缀函数，记作 \pi(i)π(i)，其定义如下：